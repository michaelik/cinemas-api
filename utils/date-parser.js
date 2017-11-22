module.exports = (date, time) => {
    const days = ["Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday", "Sunday"]
    const shortDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    return {
      interval() {
        let start = shortDays.findIndex(day => day.toLowerCase() === date.substr(0,3).toLowerCase())
        let end = shortDays.findIndex(day => day.toLowerCase() === date.substr((date.length - 3), 3).toLowerCase())
        let result = []
        let i = start
        while (1 == 1 ) {
          result.push(shortDays[i])
          i === shortDays.length-1 ? i = 0 : i++
          if (i == end+1) {
            break
          }
        }
        return result.map(day => ({
          day,
          time,
        }))
      }
    }
  }