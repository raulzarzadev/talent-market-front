import MaterialSelectField from '@comps/MaterialSelectField'
import Modal from '@comps/Modal'
import { Box, Button } from '@material-ui/core'
import fetching from '@src/helpers/fetching'
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
        const normalizedOptinos = res.reduce((acc, curr) => {
          const userOption = { label: curr.name, value: curr._id }
          return [...acc, userOption]
        }, [])
        console.log(normalizedOptinos)
        setCoaches(normalizedOptinos)
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
