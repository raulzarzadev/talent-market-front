import ButtonLink from '@comps/Link/ButtonLink'
import { Box, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  assignment: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: theme.spacing(2, 0),
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.dark,
  },
}))
export default function UserView({
  user = {},
  assignedTo = null,
  assignments = [],
  recruiter = false,
}) {
  const classes = useStyles()
  return (
    <div className="flex-center column">
      <Typography variant="caption" component="div">
        {`User profile`}
        <Box>{`Name: `}</Box>
        <Typography variant="h5">{user.name}</Typography>
        <Box>
          {`Rol: `}
          <Typography variant="h6" component="span">
            {' '}
            {user?.rol?.map((rol) => rol)}
          </Typography>
        </Box>
        <Box>{`Assigned to: `}</Box>
        {assignedTo ? (
          <Box key={assignedTo?._id} className={classes.assignment}>
            <Box m={1}>{assignedTo?.rol?.map((rol) => rol)}</Box>
            <Box>
              <Typography variant="h6" component="span">
                {assignedTo?.name}
              </Typography>
            </Box>
            <Box>
              <ButtonLink
                variant="outlined"
                href={`/dashboard/${assignedTo?._id}`}
              >
                visit
              </ButtonLink>
            </Box>
          </Box>
        ) : (
          <Typography variant="h5">{assignedTo?.name || ' Anyone'}</Typography>
        )}
        <Box>{`Assignments: `}</Box>
      </Typography>
      <Box textAlign="center">
        {!!!assignments?.length && <Typography variant="h5">{' Anyone'}</Typography>}
        {assignments?.map((item) => (
          <Box key={item._id} className={classes.assignment}>
            <Box m={1}>{item?.rol?.map((rol) => rol)}</Box>
            <Box>
              <Typography variant="h6" component="span">
                {item.name}
              </Typography>
            </Box>
            <Box>
              <ButtonLink
                variant="outlined"
                href={`/dashboard/${recruiter ? 'market/' : ''}${item._id}`}
              >
                visit
              </ButtonLink>
            </Box>
          </Box>
        ))}
      </Box>
    </div>
  )
}
