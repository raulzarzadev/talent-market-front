import { Box, makeStyles, Typography } from '@material-ui/core'
import { useEffect, useState } from 'react'

var days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
var months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const getCurrectTime = () => {
  const newDate = new Date()
  const day = days[newDate.getDay()].slice(0, 3)
  const month = months[newDate.getMonth()].slice(0, 3)
  const date = newDate.getDate().toString()
  const hours = newDate.getHours().toString()
  const min = newDate.getMinutes().toString()
  const formatNums = (str) => {
    if (str.length === 1) return '0' + str
    return str
  }
  return {
    day,
    month,
    date: formatNums(date),
    hours: formatNums(hours),
    min: formatNums(min),
  }
}

const useStyles = makeStyles((theme) => ({
  clock: {
    textAlign: 'center',
  },
}))

export default function Clock() {
  const classes = useStyles()
  const [currentTime, setCurrentTime] = useState(getCurrectTime)
  useEffect(() => {
    let isMounted = true
    const getTimeEvery = 1000 * 60 // un minuto

    setInterval(() => {
      isMounted && setCurrentTime(getCurrectTime)
    }, getTimeEvery)
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className={classes.clock}>
      <Typography variant="body2" component="div">
        <Box style={{ textTransform: 'upercase' }}>{currentTime.day}</Box>
        <Box>{`${currentTime.month} ${currentTime.date}`}</Box>
        <Box fontWeight="600" fontSize="2rem">
          {`${currentTime.hours} : ${currentTime.min}`}
        </Box>
        <Box>Actual Time</Box>
      </Typography>
    </div>
  )
}
