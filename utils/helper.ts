import devsAndTickets from '../utils/mockData'
import devInfo from '../utils/devData'


export const filterOutDev = (ptoArr) => {
  if (!ptoArr || !ptoArr.length) {
    return {mockData: devsAndTickets, devData: devInfo}
  }

  const mockData = devsAndTickets.filter(dev => !ptoArr.includes(dev.name))
  const devData = devInfo.filter(dev => !ptoArr.includes(dev.name))
  return {mockData, devData}
}
