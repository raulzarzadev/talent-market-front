import { Box, IconButton, makeStyles, Typography } from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
const useStyles = makeStyles((theme) => ({
  advanceSearch: {
    display: 'flex',
    alignItems: 'center',
    '& *': {
      color: theme.palette.text.disabled,
    },
  },
}))
export default function AdvaceSearch() {
  const classes = useStyles()
  return (
    <div className={classes.advanceSearch}>
      <Typography variant="body2" component="div">
        <Box fontFamily="Montserrat" mr={2}>
          Advance Search
        </Box>
      </Typography>
      <IconButton size="small">
        <MoreHorizIcon />
      </IconButton>
    </div>
  )
}
