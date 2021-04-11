import { Button, makeStyles } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'

import Link from '@comps/Link'
import MarketTitle from '@comps/MarketTitle'

const paddingMarket = '3rem'
const paddingTable = 40
const useStyles = makeStyles((theme) => ({
  market: {
    paddingTop: 0,
    [theme.breakpoints.up('sm')]: {
      padding: '2rem',
      padding: paddingMarket,
    },
  },
  marketNav: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    margin: theme.spacing(2, 0),
  },
}))
export default function MarketLayout({
  Component,
  title,
  hideButtom,
  ...props
}) {
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
