import ButtonLink from '@comps/Link/ButtonLink'
import NewUserModal from '@comps/Modals/NewUserModal'
import { Box, Button } from '@material-ui/core'
import Layout from '@src/Layout'
import { useState } from 'react'

export default function Dasboard() {
  return <Layout Component={DashboardMain} />
}

function DashboardMain() {
  const [openModalNewUser, setOpenModalNewUser] = useState(false)
  const handleOpenNewUser = () => {
    setOpenModalNewUser(!openModalNewUser)
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Box m={2}>
        <ButtonLink
          href="/dashboard/principals"
          color="primary"
          variant="contained"
        >
          {'Principal View'}
        </ButtonLink>
      </Box>
      <Box m={2}>
        <ButtonLink href="/dashboard/coaches" color="primary" variant="contained">
          {'Coach View'}
        </ButtonLink>
      </Box>
      <Box m={2}>
        <ButtonLink
          href="/dashboard/recruiters"
          color="primary"
          variant="contained"
        >
          {'Recruiter View'}
        </ButtonLink>
      </Box>
      <Box m={2}>
        <Button
          color="secondary"
          variant="contained"
          onClick={handleOpenNewUser}
        >
          New User
        </Button>
      </Box>
      <NewUserModal
        open={openModalNewUser}
        handleClose={handleOpenNewUser}
      />
    </div>
  )
}
