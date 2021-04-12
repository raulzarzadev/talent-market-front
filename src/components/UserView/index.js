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
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  profileView: {
    width: '50%',
    minWidth: 200,
    [theme.breakpoints.up('md')]: {
      minWidth: 300,
    },
  },
}))
export default function UserView({
  user = {},
  assignedTo = null,
  assignments = [],
  recruiters = [],
}) {
  console.log(recruiters, assignments)
  const isCoach = user?.rol?.includes('coach')
  const isRecruiter = user?.rol?.includes('recruiter')
  const classes = useStyles()
  return (
    <div className="flex-center column">
      <Typography
        variant="caption"
        component="div"
        className={classes.profileView}
      >
        <Box textAlign="center" fontWeight={400}>{`User profile`}</Box>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Box textAlign="start">
            {`Name: `}
            <Typography variant="h5">{user.name}</Typography>
          </Box>
          <Box textAlign="end">
            {`Rol: `}
            <Typography variant="h6">{user?.rol?.map((rol) => rol)}</Typography>
          </Box>
        </Box>

        <TalentsList
          title="Assigned To"
          emptyLabel="Anyone yet"
          talents={assignedTo && [assignedTo]}
          classes={classes}
        />

        {isRecruiter || (
          <TalentsList
            title="Assignments"
            emptyLabel="No Assignments yet"
            talents={assignments}
            classes={classes}
          />
        )}

        {isRecruiter && (
          <TalentsList
            title="Talent recruitered"
            emptyLabel="No talent recruiter yet"
            talents={recruiters}
            classes={classes}
          />
        )}

        {isCoach && (
          <TalentsList
            title={`Team of ${user.name}`}
            emptyLabel="No Recruites yet"
            talents={recruiters}
            classes={classes}
            recruiter
          />
        )}
      </Typography>
    </div>
  )
}

const TalentsList = ({
  title,
  emptyLabel,
  talents = [],
  classes,
  recruiter = false,
}) => (
  <Box>
    <Box>{title}</Box>
    {!talents?.length ? (
      <Typography variant="h5">{emptyLabel}</Typography>
    ) : (
      talents?.map((item) => (
        <Box key={item?._id} className={classes.assignment}>
          <Box m={1}>{item?.rol?.map((rol) => rol)}</Box>
          <Box>
            <Typography variant="h6" component="span">
              {item?.name}
            </Typography>
          </Box>
          <Box>
            <ButtonLink
              variant="outlined"
              href={`/dashboard/${recruiter ? 'market/' : ''}${item?._id}`}
            >
              visit
            </ButtonLink>
          </Box>
        </Box>
      ))
    )}
  </Box>
)
