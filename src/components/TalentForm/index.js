import WriteTalentProfile from '@comps/WriteTalentProfile'
import SendToCoachModal from '@comps/Modals/SendToCoachModal'
import { Avatar, Box, Button, Grid, makeStyles } from '@material-ui/core'
import theme from '@src/theme'
import { useEffect, useRef, useState } from 'react'
import postFetch from '@src/helpers/postFetch'
import TalentLocation from '@comps/TalentLocation'
import DEFAULT_LOCATION from 'HARD-DATA/DEFAULT_LOCATION' // CDMX
import Alert from '@material-ui/lab/Alert'
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme) => ({
  imageSize: {
    width: theme.spacing(22),
    height: theme.spacing(22),
  },
  talentForm: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  talentImage: {
    maxWidth: 300,
    padding: '1rem',
  },
  tabs: {
    display: 'flex',
  },
  tab: {
    background: theme.palette.primary.main,
    padding: theme.spacing(1),
    cursor: 'pointer',
  },
}))

export default function TalentForm({ talent }) {
  const classes = useStyles()

  useEffect(() => {
    if (talent) {
      console.log('edit t', talent)
      setForm(talent)
      setFiles(talent.files)
      return
    }
    console.log('new t')
  }, [talent])

  const handleChange = (e) => {
    setEditing(true)
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleSelectFile = (e) => {
    setEditing(true)
    console.log(e.target, 'hola')
    setFiles({ ...files, [e.target.name]: e.target.files[0] })
  }
  /*   const handleSendCouch = () => {
    handleOpenSendCoachModal(sendToCoachModal)
     // postFetch('/talent', { rol: ['recruit'], ...form }).then((res) =>
      console.log(res)
    )
  } */
  const router = useRouter()
  const [alert, setAlert] = useState(null)
  const alertSuccessAndRedirect = () => {
    setLoading(false)
    setAlert(<Alert severity="success">Talent created successfully</Alert>)
    setForm({})
    setTimeout(() => {
      router.push('/dashboard/market')
    }, 300)
  }
  const handleSave = () => {
    setLoading(true)
    if (talent?._id) {
      postFetch(
        `/talent/${talent._id}`,
        { rol: ['recruit'], ...form },
        'PUT'
      ).then(alertSuccessAndRedirect)
    } else {
      postFetch('/talent', { rol: ['recruit'], ...form }).then(
        alertSuccessAndRedirect
      )
    }
  }
  const handleDescart = () => {
    setForm({})
  }
  const handleChangeTab = (tab) => {
    setTabSelected(tab)
  }
  const handleOpenSendCoachModal = () => {
    setSendToCoachModal(!sendToCoachModal)
  }
  const [sendToCoachModal, setSendToCoachModal] = useState(false)
  const [form, setForm] = useState({})
  const [files, setFiles] = useState({})
  const [tabSelected, setTabSelected] = useState('profile')

  const [editing, setEditing] = useState(false)

  const handleSetLocation = (location) => {
    setEditing(true)
    setForm({ ...form, location })
  }

  const [loading, setLoading] = useState()

  const isDisabled = !editing || loading || form?.name?.length < 1
  const locationIsValid = form?.location?.length === 2
  if (!locationIsValid) setForm({ ...form, location: DEFAULT_LOCATION })

  return (
    <div className={classes.talentForm}>
      <div className={classes.talentImage}>
        <Box display="flex" justifyContent="center" alignItems="center" p={2}>
          <Avatar className={classes.imageSize}>imagen</Avatar>
        </Box>
        <Box marginY={4}>
          <Button
            onClick={handleSave}
            variant="contained"
            color="primary"
            fullWidth
            disabled={isDisabled}
          >
            Save
          </Button>
        </Box>
        <Box marginY={4} onClick={handleOpenSendCoachModal}>
          <Button variant="contained" color="primary" fullWidth>
            Save and send couch
          </Button>
        </Box>
        <Box marginY={4}>
          <TalentLocation
            location={form?.location}
            handleSetLocation={handleSetLocation}
          />
          {/*  <Box mt={1}>
            <Button
              onClick={handleSave}
              variant="contained"
              color="primary"
              fullWidth
            >
              Set location
            </Button>
          </Box> */}
        </Box>
        <Box marginY={4} onClick={handleDescart}>
          <Button variant="outlined" fullWidth>
            Discard
          </Button>
        </Box>
      </div>

      <div>
        {alert}
        <Grid item xs={12} className={classes.tabs}>
          <div
            onClick={() => handleChangeTab('profile')}
            className={classes.tab}
            style={{
              background:
                tabSelected === 'profile' && theme.palette.background.ligth,
            }}
          >
            Profile
          </div>
          <div
            onClick={() => handleChangeTab('resume')}
            className={classes.tab}
            style={{
              background:
                tabSelected === 'resume' && theme.palette.background.ligth,
            }}
          >
            Resume
          </div>
          <div
            onClick={() => handleChangeTab('social')}
            className={classes.tab}
            style={{
              background:
                tabSelected === 'social' && theme.palette.background.ligth,
            }}
          >
            Social Profiles
          </div>
        </Grid>
        {tabSelected === 'profile' && (
          <WriteTalentProfile
            handleChange={handleChange}
            handleSelectFile={handleSelectFile}
            files={files}
            form={form}
          />
        )}
      </div>

      <SendToCoachModal
        open={sendToCoachModal}
        handleClose={handleOpenSendCoachModal}
        // handleSend={handleSendCouch}
        handleChange={handleChange}
        form={form}
      />
    </div>
  )
}
