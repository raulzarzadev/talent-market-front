import WriteTalentProfile from '@comps/WriteTalentProfile'
import SendToCoachModal from '@comps/Modals/SendToCoachModal'
import { Avatar, Box, Button, Grid, makeStyles } from '@material-ui/core'
import fetching from '@src/helpers/fetching'
import theme from '@src/theme'
import { useEffect, useState } from 'react'
import postFetch from '@src/helpers/postFetch'

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
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleSelectFile = (e) => {
    console.log(e.target, 'hola')
    setFiles({ ...files, [e.target.name]: e.target.files[0] })
  }
  const handleSendCouch = () => {
    handleOpenSendCoachModal()
    console.log('sendCouch')
  }
  const handleSaveDraft = () => {
    postFetch('/candidate', form)
    console.log('save draft')
  }
  const handleDescart = () => {
    console.log('descart')
  }
  const handleChangeTab = (tab) => {
    setTabSelected(tab)
  }
  const handleOpenSendCoachModal = () => {
    setSendToCoachModal(!sendToCoachModal)
    console.log('modal')
  }
  const [sendToCoachModal, setSendToCoachModal] = useState(false)
  const [form, setForm] = useState({})
  const [files, setFiles] = useState({})
  const [tabSelected, setTabSelected] = useState('profile')
  console.log(form)
  return (
    <div className={classes.talentForm}>
      <div className={classes.talentImage}>
        <Box display="flex" justifyContent="center" alignItems="center" p={2}>
          <Avatar className={classes.imageSize}>imagen</Avatar>
        </Box>
        <Box marginY={4}>
          <Button
            onClick={handleSaveDraft}
            variant="contained"
            color="primary"
            fullWidth
          >
            Save as draft
          </Button>
        </Box>
        <Box marginY={4} onClick={handleOpenSendCoachModal}>
          <Button variant="contained" color="primary" fullWidth>
            Save and send couch
          </Button>
        </Box>
        <Box marginY={4} onClick={handleDescart}>
          <Button variant="outlined" fullWidth>
            Discard
          </Button>
        </Box>
      </div>
      <div>
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
        handleSend={handleSendCouch}
        handleChange={handleChange}
        value={form.coach}
      />
    </div>
  )
}
