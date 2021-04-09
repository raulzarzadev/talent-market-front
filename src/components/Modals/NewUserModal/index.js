import MaterialSelectField from '@comps/MaterialSelectField'
import MaterialTextField from '@comps/MaterialTextField'
import Modal from '@comps/Modal'
import { Box, Button } from '@material-ui/core'
import postFethc from '@src/helpers/postFetch'
import { useState } from 'react'
import Alert from '@material-ui/lab/Alert'

export default function NewUserModal({ open, handleClose }) {
  const roles = [
    {
      value: 'principal',
      label: 'Principal',
    },
    {
      value: 'coach',
      label: 'Coach',
    },
    {
      value: 'recruiter',
      label: 'Recruiter',
    },
  ]

  const [form, setForm] = useState()
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const [loading, setLoading] = useState(false)
  const handleSubmit = () => {
    setLoading(true)
    postFethc('/user', form)
      .then((res) => {
        console.log(res)
        setForm({})
        setLoading(false)
        setSuccess(true)
      })
      .catch((e) => setError(true))
  }
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const isDisabled = !form?.name || !form?.rol || loading
  return (
    <Modal open={open} handleClose={handleClose} title="New User">
      <Box m={2}>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
          }}
        >
          <Box m={2}>
            <MaterialTextField
              placeholder="text"
              value={form?.name || ''}
              name="name"
              onChange={handleChange}
              toplabel="User Name"
            />
          </Box>
          <Box m={2}>
            <MaterialSelectField
              placeholder="select"
              value={form?.rol || ''}
              options={roles}
              name="rol"
              onChange={handleChange}
              toplabel="User Rol"
            />
          </Box>
          <Box textAlign="end" m={2}>
            {success && (
              <Alert onClose={() => setSuccess(false)}>User created</Alert>
            )}
            {error && <Alert onClose={() => setError(false)}>Error</Alert>}
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={isDisabled}
            >
              {loading ? 'Loading...' : 'Save'}
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  )
}
