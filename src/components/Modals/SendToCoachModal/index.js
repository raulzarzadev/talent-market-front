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
  value,
}) {
  const [coaches, setCoaches] = useState([])
  useEffect(() => {
    fetching('/user?rol=coach').then((res) => {
      if (res) {
        setCoaches(normalizeToSelectOptions(res))
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
            options={coaches}
            onChange={handleChange}
            value={value || ''}
            name="coach"
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
