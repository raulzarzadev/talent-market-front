import MaterialSelectField from '@comps/MaterialSelectField'
import MaterialTextField from '@comps/MaterialTextField'
import Modal from '@comps/Modal'
import { Box, Button, Typography } from '@material-ui/core'
import postFethc from '@src/helpers/postFetch'
import { useEffect, useState } from 'react'
import Alert from '@material-ui/lab/Alert'
import fetching from '@src/helpers/fetching'
import normalizeToSelectOptions from '@src/helpers/normalizeToSelectOptions'

export default function NewUserModal({ open, handleClose }) {
  const roles = [
    {
      value: 'principal',
      label: 'Principal',
      canBeAssignTo: [],
    },
    {
      value: 'coach',
      label: 'Coach',
      canBeAssignTo: ['principal'],
    },
    {
      value: 'recruiter',
      label: 'Recruiter',
      canBeAssignTo: ['coach'],
    },
  ]

  const [form, setForm] = useState()
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const [loading, setLoading] = useState(false)
  const handleSubmit = () => {
    setLoading(true)
    postFethc('/talent', form)
      .then((res) => {
        console.log(res)
        setForm({})
        setLoading(false)
        setSuccess(true)
      })
      .catch((e) => setError(true))
  }

  const [canBeAssignTo, setCanBeAssignTo] = useState([])
  useEffect(() => {
    const rol = roles.find((rol) => rol?.value === form?.rol)
    setCanBeAssignTo(rol?.canBeAssignTo)
  }, [form?.rol])

  const [canBeAssignToUser, setCanBeAssignToUser] = useState([])
  useEffect(() => {
    if (canBeAssignTo) {
      const assigments = canBeAssignTo.map((assignedTo) => {
        return fetching(`/talent?rol=${assignedTo}`)
      })
      Promise.all(assigments).then((res) =>
        setCanBeAssignToUser(normalizeToSelectOptions(res?.flat()))
      )
    }
  }, [canBeAssignTo])

  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  console.log(canBeAssignToUser)
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
          <Box m={2}>
            {canBeAssignToUser.length ? (
              <MaterialSelectField
                placeholder="Select"
                value={form?.assignedTo || ''}
                options={canBeAssignToUser}
                name="assignedTo"
                onChange={handleChange}
                toplabel="Assign To"
              />
            ) : (
              <Typography variant="h5">Anyone yet</Typography>
            )}
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
