import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  circle: {
    height: 22,
    width: 22,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '50%',
  },
}))
export default function Circle() {
  const classes = useStyles()
  return <div className={classes.circle}></div>
}
