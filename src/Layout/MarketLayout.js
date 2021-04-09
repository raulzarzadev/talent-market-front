import { Box, Button, makeStyles, Typography } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import Circle from '@comps/Circle'
import TalentsGrid from '@comps/TalentsGrid'
import Link from '@comps/Link'
import MarketTitle from '@comps/MarketTitle'

const paddingMarket = '3rem'
const paddingTable = 40
const useStyles = makeStyles((theme) => ({
  market: {
    padding: '2rem',
    paddingTop: 0,
    [theme.breakpoints.up('sm')]: {
      padding: paddingMarket,
    },
  },
  marketNav: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing(2, 0),
  },
}))
export default function MarketLayout({ Component, title, hideButtom,...props }) {
  const classes = useStyles()
  return (
    <div className={classes.market}>
      <div className={classes.marketNav}>
        <MarketTitle title={title} />
        {hideButtom || (
          <Link href="/dashboard/market/new">
            <Button
              endIcon={<AddCircleOutlineIcon style={{ fontSize: 14 }} />}
              variant="contained"
              color="primary"
              size="small"
            >
              Add new talent
            </Button>
          </Link>
        )}
      </div>
      <div className={classes.marketContent}>
        <Component {...props} paddingTable={paddingTable} />
      </div>
    </div>
  )
}