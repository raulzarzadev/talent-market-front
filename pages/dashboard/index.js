import ButtonLink from '@comps/Link/ButtonLink'
import NewUserModal from '@comps/Modals/NewUserModal'
import { Box, Button, makeStyles } from '@material-ui/core'
import Layout from '@src/Layout'
import Head from 'next/head'
import { useState } from 'react'

export default function Dasboard() {
  return <Layout Component={DashboardMain} />
}

const useStyles = makeStyles((theme) => ({
  menu: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
}))

function DashboardMain() {
  const classes = useStyles()
  const [openModalNewUser, setOpenModalNewUser] = useState(false)
  const handleOpenNewUser = () => {
    setOpenModalNewUser(!openModalNewUser)
  }
  const buttons = [
    { href: '/dashboard/principals', label: 'Principal View' },
    { href: '/dashboard/coaches', label: 'Coaches View' },
    { href: '/dashboard/recruiters', label: 'Recruiters View' },
  ]
  return (
    <>
      <Head>
        <title>Dashboard - Talent Market</title>
      </Head>
      <div className={classes.menu}>
        {buttons.map((button) => (
          <Box m={2} width="90%" maxWidth={450} key={button.label}>
            <ButtonLink
              fullWidth
              href={button.href}
              color="primary"
              variant="contained"
            >
              {button.label}
            </ButtonLink>
          </Box>
        ))}

        <Box m={2}>
          <Button
            color="secondary"
            variant="contained"
            onClick={handleOpenNewUser}
          >
            New User
          </Button>
        </Box>
        <NewUserModal open={openModalNewUser} handleClose={handleOpenNewUser} />
      </div>
    </>
  )
}
