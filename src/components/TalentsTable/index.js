import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { Box, TableCell, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  row: {
    marginTop: '1rem',
    background: 'red',
    padding: 5,
    borderSpacing: 5,
  },
}))

const rows = [
  {
    name: 'Antony Gonzalez',
    profession: 'Construct Manager',
    industry: 'Construction',
    position: 'Project Manager',
    phone: '+01 637 12345678',
    salary: '$80k',
    location: 'NJ',
  },
]

export default () => {
  const classes = useStyles()

  return (
    <TableContainer>
      <Table aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
            <TableCell align="center" className={classes.cell}>
              <Typography variant="caption">Name</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="caption">Industry</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="caption">Job Position</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="caption">Phone</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="caption">Salary</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="caption">Location</Typography>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} hover className={classes.row}>
              <TableCell component="th" scope="row">
                <Typography variant="caption">
                  <Box fontSize="1.2rem" fontWeight={600}>
                    {row.name}
                  </Box>
                  <Box f>{row.profession}</Box>
                </Typography>{' '}
              </TableCell>
              <TableCell>
                <Typography variant="caption">{row.industry}</Typography>{' '}
              </TableCell>
              <TableCell>
                <Typography variant="caption">{row.position}</Typography>{' '}
              </TableCell>
              <TableCell>
                <Typography variant="caption">{row.phone}</Typography>{' '}
              </TableCell>
              <TableCell>
                <Typography variant="caption">{row.salary}</Typography>{' '}
              </TableCell>
              <TableCell>
                <Typography variant="caption">{row.location}</Typography>{' '}
              </TableCell>
              <TableCell>
                <Typography>Boton</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
