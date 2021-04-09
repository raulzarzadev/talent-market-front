import Divider from '@comps/Divider'
import Link from '@comps/Link'
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  footer: {
    color: '#fff',
    backgroundColor: theme.palette.background.dark,
    zIndex: 1,
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(1),

  },

  ul: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    margin: 0,
  },
  li: {
    padding: theme.spacing(0.5, 1),
  },
  versionInfo: {
    display: 'flex',
    color: theme.palette,
  },
}))

export default function Footer() {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <div className={classes.versionInfo}>
        <Typography variant="body2">GPAC Directory v0.1 - 2019</Typography>
      </div>
      <div>
        <nav className={classes.nav}>
          <ul className={classes.ul}>
            <li className={classes.li}>
              <Link href="/dashboard">
                <Typography> Help </Typography>
              </Link>
            </li>
            <Divider orientation="horizontal" />
            <li className={classes.li}>
              <Link href="/dashboard">
                <Typography> Tutorials </Typography>
              </Link>
            </li>
            <Divider orientation="horizontal" />
            <li className={classes.li}>
              <Link href="/dashboard">
                <Typography variant="body1"> Support </Typography>
              </Link>
            </li>
            <Divider orientation="horizontal" />
            <li className={classes.li}>
              <Link href="/dashboard">
                <Typography>FAQ's</Typography>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
