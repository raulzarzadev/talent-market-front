import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Box, Button, Typography } from '@material-ui/core'
import ButtonLink from '@comps/Link/ButtonLink'

const useStyles = makeStyles((theme) => ({
  titles: {
    padding: theme.spacing(0.5, 0),
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  row: {
    margin: theme.spacing(1, 0),
    background: theme.palette.background.ligth,
    boxshadow: ' 0px 3px 6px #00000005',
    borderRadius: theme.spacing(0.5),
  },
  cell: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.5),
  },
  cellAvatar: {
    position: 'relative',
  },
  avatar: {
    position: 'absolute',
    left: -20,
    top: 0,
    width: 54,
    height: 54,
    borderRadius: '50%',
  },
}))
const rows = [
  {
    id: '1',
    image: '/assets/Antony.png',
    name: 'Antony Gonzalez',
    profession: 'Construct Manager',
    industry: 'Construction',
    position: 'Project Manager',
    phone: '+01 637 12345678',
    salary: '$80k',
    location: 'NJ',
  },
  {
    id: '2',
    image: '/assets/Antony.png',
    name: 'Antony Gonzalez',
    profession: 'Construct Manager',
    industry: 'Construction',
    position: 'Project Manager',
    phone: '+01 637 12345678',
    salary: '$80k',
    location: 'NJ',
  },
]

export default function TalentGrid({ paddingTable }) {
  const classes = useStyles()
  return (
    <Grid container style={{ paddingLeft: 20 }}>
      <Grid container item className={classes.titles}>
        <Grid style={{ paddingLeft: paddingTable }}></Grid>
        <Grid item xs={12} sm={2} className={classes.cell}>
          <Typography variant="caption">Name</Typography>
        </Grid>
        <Grid item xs={12} sm={2} className={classes.cell}>
          <Typography variant="caption">Industry</Typography>
        </Grid>
        <Grid item xs={12} sm={2} className={classes.cell}>
          <Typography variant="caption">Job Position</Typography>
        </Grid>
        <Grid item xs={12} sm={2} className={classes.cell}>
          <Typography variant="caption">Phone</Typography>
        </Grid>
        <Grid item xs={12} sm={1} className={classes.cell}>
          <Typography variant="caption">Salary</Typography>
        </Grid>
        <Grid item xs={12} sm={1} className={classes.cell}>
          <Typography variant="caption">Location</Typography>
        </Grid>
        <Grid item xs={12} sm={true}></Grid>
      </Grid>
      <Grid container item className={classes.content}>
        {rows.map(
          ({
            name,
            industry,
            position,
            phone,
            salary,
            location,
            profession,
            image,
            id,
          }) => (
            <Grid key={id} container item className={classes.row}>
              <Grid
                className={classes.cellAvatar}
                style={{ paddingLeft: paddingTable }}
              >
                <img className={classes.avatar} src={image} />
              </Grid>
              <Grid item xs={12} sm={2} className={classes.cell}>
                <Typography variant="caption">
                  <Box fontWeight="600">{name}</Box>
                  <Box fontWeight="300">{profession}</Box>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={2} className={classes.cell}>
                <Typography variant="caption">{industry}</Typography>
              </Grid>
              <Grid item xs={12} sm={2} className={classes.cell}>
                <Typography variant="caption">{position}</Typography>
              </Grid>
              <Grid item xs={12} sm={2} className={classes.cell}>
                <Typography variant="caption" variant="caption">
                  {phone}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={1} className={classes.cell}>
                <Typography variant="caption">{salary}</Typography>
              </Grid>
              <Grid item xs={12} sm={1} className={classes.cell}>
                <Typography variant="caption">{location}</Typography>
              </Grid>
              <Grid item xs={12} sm={true} className={classes.cell}>
                <ButtonLink variant="outlined" href={`/dashboard/market/${id}`}>
                  View Profile
                </ButtonLink>
              </Grid>
            </Grid>
          )
        )}
      </Grid>
    </Grid>
  )
}
