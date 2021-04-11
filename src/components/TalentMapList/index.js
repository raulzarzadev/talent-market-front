import Divider from '@comps/Divider'
import {
  Box,
  Checkbox,
  FormControlLabel,
  makeStyles,
  Typography,
} from '@material-ui/core'
import theme from '@src/theme'
import { useState } from 'react'
import Map from './Map'

const headerHeight = 50
const useStyles = makeStyles((theme) => ({
  mapPage: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      position: 'absolute',
      height: headerHeight,
      top: 0,
      left: 0,
      right: 0,
      alignItems: 'center',
      padding: theme.spacing(0, 2),
    },
  },
  filterItem: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(1, 0),
    },
  },
  divider: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'space-evenly',
  },
  sideList: {
    marginTop: headerHeight,
    display: 'flex',
    maxWidth: '100%',
    overflow: 'auto',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'column',
    },
    //minWidth: 250,
    //maxHeight: '600px',
    //overflow: 'auto',
  },
  talent: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing(1, 0),
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1),
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.background.ligth,
    },
    '&[selected=true]': {
      background: 'red',
    },
  },

  contact: { textAlign: 'end' },
}))

export default function TalentMapList({ talents = [] }) {
  const classes = useStyles()

  const talentsWithValidLocation = talents?.filter(
    (talent) => talent?.location?.length === 2
  )
  const talentsWithOutValidLocation = talents?.filter(
    (talent) => talent?.location?.length !== 2
  )
  console.log(talentsWithValidLocation)

  const handleChangeFilter = (filter) => {
    console.log('change filter', filter)
  }
  const [talentSelectedLocation, setTalentSelectedLocation] = useState('')
  const handleSelectTalent = (location) => {
    console.log(location)
    setTalentSelectedLocation(location)
  }

  return (
    <div className={classes.mapPage}>
      {/* Map Header */}
      <Typography className={classes.header} variant="caption">
        <Box className={classes.filterItem}>{`Show only : `}</Box>
        <FormControlLabel
          className={classes.filterItem}
          control={
            <Checkbox
              checked={false}
              onChange={() => handleChangeFilter('alphas')}
              name="aplhas"
            />
          }
          label="Alphas"
        />
        <FormControlLabel
          className={classes.filterItem}
          control={
            <Checkbox
              checked={true}
              onChange={() => handleChangeFilter('orders')}
              name="orders "
            />
          }
          label="Job Orders "
        />
        <FormControlLabel
          className={classes.filterItem}
          control={
            <Checkbox
              checked={false}
              onChange={() => handleChangeFilter('companies')}
              name="companies"
            />
          }
          label="Comapnies"
        />
      </Typography>
      {/* Side List of Options */}
      <div className={classes.sideList}>
        {talentsWithValidLocation.map((talent) => (
          <Typography
            key={talent._id}
            className={classes.talent}
            style={{
              backgroundColor:
                talentSelectedLocation === talent.location
                  ? theme.palette.background.ligth
                  : theme.palette.background.default,
            }}
            component="div"
            variant="caption"
            onMouseOver={() => handleSelectTalent(talent.location)}
          >
            <div className={classes.info}>
              <Box fontWeight={600}>{talent?.name}</Box>
              <div>Name Company</div>
              <div>Rubro</div>
            </div>
            <div className={classes.contact}>
              <div>Adress</div>
              <div>ZIP</div>
              <div>Contact</div>
            </div>
          </Typography>
        ))}
        <Box className={classes.divider}>
          {`Without location `}
          <Divider orientation="horizontal" width="60px" />
        </Box>
        {talentsWithOutValidLocation.map((talent) => (
          <Typography
            key={talent._id}
            className={classes.talent}
            component="div"
            variant="caption"
          >
            <div className={classes.info}>
              <Box fontWeight={600}>{talent?.name}</Box>
              <div>Name Company</div>
              <div>Rubro</div>
            </div>
            <div className={classes.contact}>
              <div>Adress</div>
              <div>ZIP</div>
              <div>Contact</div>
            </div>
          </Typography>
        ))}
      </div>
      {/* <MAP> */}
      <Map
        markers={talentsWithValidLocation}
        talentSelectedLocation={talentSelectedLocation}
        handleSelectTalent={handleSelectTalent}
      />
    </div>
  )
}
