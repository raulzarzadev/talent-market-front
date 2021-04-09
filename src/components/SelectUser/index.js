import ButtonLink from '@comps/Link/ButtonLink'
import { Box, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
export default function SelectUser({ users = [], title = '' }) {
  return (
    <div className="flex-center column">
      <Typography variant="h4">
        <Box m={2}>{title}</Box>
      </Typography>
      {users?.map((user) => (
        <Box m={2} key={user._id} className="flex-center">
          <Typography>{user.name}</Typography>
          <ButtonLink
            href={`/dashboard/${user._id}`}
            variant="outlined"
          >
            {'Visit'}
          </ButtonLink>
        </Box>
      ))}
    </div>
  )
}

SelectUser.propTypes = {
  users: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  recruiter: PropTypes.bool,
}
