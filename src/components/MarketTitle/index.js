import Circle from '@comps/Circle'
import { Box, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  
  marketTitle: {
    paddingLeft: -20,
    display: 'flex',
    position: 'relative',
    '& span': {
      position: 'absolute',
      top: 5,
      left: -30,
    },
  },
}))
export default function MarketTitle({ title = 'New Talent' }) {
  const classes = useStyles()
  return (
    <div className={classes.marketTitle}>
      <span>
        <Circle />
      </span>
      <Typography variant="h5">
        <Box fontWeight={600}>{title}</Box>
      </Typography>
    </div>
  )
}
