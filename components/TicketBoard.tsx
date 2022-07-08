import {FC, useEffect, useState} from 'react'
import styles from '../styles/TicketBoard.module.css'


type MockData = {
  name: string; 
  tickets: { 
    ticketType: string; 
    ticketNumber: string; 
    dueDate: string;
  } 
  totalTickets: number;
}




const TicketBoard: FC = (props) => {
  const { data } = props
  const {mockData} = data
  const [boardData, setBoardData] = useState<MockData[]>([])

  useEffect(() => {

    const info = []

    mockData?.forEach(dev => {
      info.push({
        name: dev.name,
        totalTickets: dev.totalTickets,
        newApp: 0,
        appUpdate: 0,
        feasibilites: 0,
        exploration: 0,
        investigation: 0,
      })
    })

    mockData?.sort((a,b) => {      
      if(a.totalTickets > b.totalTickets) {
        return 1
      } else return -1
    })

    setBoardData(info)

  },[mockData])

  return (
  <div className={styles.container}>
    {boardData && boardData.map((dev, i) => {
      return (<div key={i + dev.name} className={styles.card}>
        <h3>{dev.name}</h3>
        <label>Total Tickets</label>
        <p>{dev.totalTickets}</p>
        <label>New App Builds</label>
        <p>{dev.newApp}</p>
        <label>App Updates</label>
        <p>{dev.appUpdate}</p>
        <label>Total Tickets</label>
        <p>{dev.totalTickets}</p>
      </div>)
    }
    )}
  </div>
  )
}

export default TicketBoard