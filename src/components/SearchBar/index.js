import { IconButton, makeStyles } from '@material-ui/core'
import MaterialTextField from '@comps/MaterialTextField'
import MaterialSelectField from '@comps/MaterialSelectField'
import Divider from '@comps/Divider'
import SearchIcon from '@material-ui/icons/Search'
import SELECTDATA from 'HARD-DATA/SELECT-DATA'
const useStyles = makeStyles((theme) => ({
  searchBar: {
    backgroundColor: theme.palette.background.ligth,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(0.5),
    borderRadius: theme.spacing(0.5),
  },
  searchButton: {
    borderRadius: theme.spacing(0, 0.5, 0.5, 0),
    backgroundColor: theme.palette.secondary.main,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))
export default function SearchBar() {
  const classes = useStyles()
  return (
    <div className={classes.searchBar}>
      <MaterialTextField
        name="input-name"
        value=""
        toplabel=""
        onChange={() => {}}
        placeholder="Quick Search..."
      />
      <Divider />
      <MaterialSelectField
        name="input-name"
        value=""
        toplabel=""
        onChange={() => {}}
        placeholder="All Entries"
        options={SELECTDATA}
      />
      <Divider />
      <MaterialSelectField
        name="input-name"
        value=""
        toplabel=""
        onChange={() => {}}
        placeholder="Industry"
        options={SELECTDATA}
      />
      <Divider />
      <MaterialSelectField
        name="input-name"
        value=""
        toplabel=""
        onChange={() => {}}
        placeholder="Location"
        options={SELECTDATA}
      />
      <div className={classes.searchButton}>
        <IconButton size="small">
          <SearchIcon style={{ color: '#fff' }} />
        </IconButton>
      </div>
    </div>
  )
}
