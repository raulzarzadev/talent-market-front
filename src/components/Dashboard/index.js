import React, { useEffect } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import CssBaseline from '@material-ui/core/CssBaseline'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import WorkIcon from '@material-ui/icons/Work'
import MapIcon from '@material-ui/icons/Map'

import SearchBar from '@comps/SearchBar'
import Footer from '@comps/Footer'
import Link from '@comps/Link'
import DataUsageIcon from '@material-ui/icons/DataUsage'
import GroupIcon from '@material-ui/icons/Group'
import { useRouter } from 'next/router'
import theme from '@src/theme'
import AdvanceSearch from '@comps/AdvanceSearch'
import { Button } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import Clock from '@comps/Clock'
import ButtonLink from '@comps/Link/ButtonLink'
import Head from 'next/head'

const drawerWidth = 75

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: theme.palette.background.default,
    width: `calc(100% - ${drawerWidth}px)`,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth * 2}px)`,
    },
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    [theme.breakpoints.up('md')]: {
      marginLeft: drawerWidth * 2,
      width: `calc(100% - ${drawerWidth * 2}px)`,
    },
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    display: 'none',
    width: 'auto',
    maxWidth: drawerWidth,
    [theme.breakpoints.up('md')]: {
      maxWidth: drawerWidth * 2,
    },
    flexShrink: 0,
    whiteSpace: 'nowrap',
    backgroundColor: theme.palette.background.dark,
    zIndex: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  toolbar_search: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.default,
    paddingLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      paddingLeft: drawerWidth * 2,
    },
  },
  listItemIcon: {
    color: '#fff',
    minWidth: 'auto',
    marginRight: theme.spacing(2),
  },
  listItem: {
    color: '#fff',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  searchBar: {
    backgroundColor: theme.palette.background.ligth,
    display: 'flex',
  },
  navIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(1),
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  clockContent: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
      paddingBottom: theme.spacing(10),
    },
  },
}))

const menuItems = [
  {
    label: 'Dashboard',
    disabled: false,
    icon: <DataUsageIcon />,
    href: '/dashboard',
  },
  {
    label: 'Job Orders',
    disabled: true,
    icon: <WorkIcon />,
    href: '/',
  },
  {
    label: 'Market',
    disabled: false,
    icon: <GroupIcon />,
    href: '/dashboard/market',
  },
  {
    label: 'Map',
    disabled: false,
    icon: <MapIcon />,
    href: '/dashboard/map',
  },
]
export default function Dashboard({ children }) {
  const classes = useStyles()
  const { route, back } = useRouter()
  const handleBack = () => {
    back()
  }
  const isLocatedIn = (href) => href === route
  return (
    <>
      <Head>
        <link rel="icon" href="/assets/group_icon.svg" />
      </Head>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar_search}>
            {route === '/dashboard/market' && (
              <>
                <SearchBar />
                <AdvanceSearch />
              </>
            )}
            {route !== '/dashboard/market' && (
              <Button
                onClick={handleBack}
                startIcon={
                  <ArrowBackIosIcon
                    color="secondary"
                    style={{ fontSize: '30px' }}
                  />
                }
              >
                Back
              </Button>
            )}
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" classes={{ paper: classes.drawer }}>
          <div>
            <div className={classes.navIcon}>
              <ButtonLink href="/">
                <img src="/assets/group_icon.svg" width="50px" height="50px" />
              </ButtonLink>
            </div>
            <List>
              {menuItems.map(({ label, icon, disabled, href }, i) => (
                <Link href={href} key={i}>
                  <ListItem
                    button
                    disabled={disabled}
                    style={{
                      backgroundColor:
                        isLocatedIn(href) && theme.palette.secondary.main,
                    }}
                  >
                    <ListItemIcon className={classes.listItemIcon}>
                      {icon}
                    </ListItemIcon>
                    <ListItemText
                      className={classes.listItem}
                      primary={label}
                    />
                  </ListItem>
                </Link>
              ))}
            </List>
          </div>
          <div className={classes.clockContent}>
            <Clock />
          </div>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}
