import MaterialSelectField from '@comps/MaterialSelectField'
import Modal from '@comps/Modal'
import { Box, Button } from '@material-ui/core'
import fetching from '@src/helpers/fetching'
import normalizeToSelectOptions from '@src/helpers/normalizeToSelectOptions'
import { useEffect, useState } from 'react'

export default function SendToCoachModal({
  open,
  handleClose,
  handleChange,
  handleSend,
  form,
}) {
  const [coaches, setCoaches] = useState([])
  useEffect(() => {
    fetching('/talent?rol=coach').then((res) => {
      if (res) {
        setCoaches(normalizeToSelectOptions(res))
      }
    })
  }, [])
  const [recruiters, setRecruiters] = useState([])
  useEffect(() => {
    fetching('/talent?rol=recruiter').then((res) => {
      if (res) {
        setRecruiters(normalizeToSelectOptions(res))
      }
    })
  }, [])

  return (
    <Modal
      open={open}
      handleClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div>
        <Box mt={5}>
          <MaterialSelectField
            placeholder="Select"
            options={recruiters}
            onChange={handleChange}
            value={form.recruitedBy || ''}
            name="recruitedBy"
            toplabel="This candidate was recruited by"
          />
        </Box>
        <Box mt={5}>
          <MaterialSelectField
            placeholder="Select"
            options={coaches}
            onChange={handleChange}
            value={form.assignedTo || ''}
            name="assignedTo"
            toplabel="Select a coach to send this candidate"
          />
        </Box>
        <Box p={2} width="auto" display="flex" justifyContent="flex-end">
          <Button variant="contained" color="primary" onClick={handleSend}>
            Send
          </Button>
        </Box>
      </div>
    </Modal>
  )
}
