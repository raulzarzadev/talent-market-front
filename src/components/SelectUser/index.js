import ButtonLink from '@comps/Link/ButtonLink'
import { Box, makeStyles, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  selectList: {
    width: '50%',
    minWidth: '200px',
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}))
export default function SelectUser({ users = [], title = '' }) {
  const classes = useStyles()
  return (
    <div className="flex-center column">
      <Typography variant="h4">
        <Box m={2}>{title}</Box>
      </Typography>
      <Box className={classes.selectList}>
        {users?.map((user) => (
          <Box m={2} key={user._id} className={classes.list}>
            <Typography>{user.name}</Typography>
            <ButtonLink href={`/dashboard/${user._id}`} variant="outlined">
              {'Visit'}
            </ButtonLink>
          </Box>
        ))}
      </Box>
    </div>
  )
}

SelectUser.propTypes = {
  users: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  recruiter: PropTypes.bool,
}
