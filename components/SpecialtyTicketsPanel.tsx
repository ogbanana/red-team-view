import devData from '../utils/devData'

const SpecialtyTicketsPanel = (props:any) => {
  const {type, data} = props
  const {devData} = data

  return (
    <div>
      <h2>{type.toUpperCase()}</h2>
      {devData?.map(dev=> {
          return <div key={Math.random()}>
            {dev.types[type] ? dev.name : '' }
          </div>
        })
      }
    </div>
  )
}

export default SpecialtyTicketsPanel