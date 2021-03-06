import MaterialSelectField from '@comps/MaterialSelectField'
import MaterialTextField from '@comps/MaterialTextField'
import {
  Box,
  Button,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core'
const inputs = [
  {
    type: 'text',
    label: 'First Name',
    placeholder: 'Text',
    inputName: 'name',
    disabled: false,
    focused: true,
  },
  {
    type: 'text',
    label: 'Last Name',
    placeholder: 'Text',
    inputName: 'lastName',
    disabled: true,
  },
  {
    type: 'select',
    selectOptions: [{ label: 'single', value: 'single' }],
    label: 'Status',
    placeholder: 'Select',
    inputName: 'status',
    disabled: true,
  },
  {
    label: 'Wish Salary',
    type: 'text',
    placeholder: 'Text',
    inputName: 'wishSalary',
    disabled: true,
  },
  {
    label: 'Functional Title',
    type: 'select',
    selectOptions: [{ label: 'Ing', value: 'ing' }],
    placeholder: 'Text',
    inputName: 'funtionalTitle',
    disabled: true,
  },
  {
    label: 'Title',
    type: 'text',
    placeholder: 'Text',
    disabled: true,
    inputName: 'title',
  },
  {
    label: 'Seniority',
    type: 'select',
    selectOptions: [{ label: 'Senior', value: 'senior' }],
    placeholder: 'Select',
    disabled: true,
    inputName: 'seniority',
  },
  {
    label: 'Industry',
    type: 'select',
    selectOptions: [{ label: 'Construction', value: 'construction' }],
    placeholder: 'Select',
    disabled: true,
    inputName: 'industry',
  },
  /* {
    label: 'Location',
    type: 'select',
    selectOptions: [{ label: 'Construction', value: 'construction' }],
    placeholder: 'Select',
    disabled: true,
    inputName: 'location',
  }, */
  {
    label: 'Phone',
    type: 'text',
    placeholder: 'Select',
    disabled: true,
    inputName: 'phone',
  },
  {
    label: 'Email',
    type: 'text',
    placeholder: 'Text',
    disabled: true,
    inputName: 'Email',
  },
  {
    label: 'Company',
    type: 'select',
    placeholder: 'Select',
    disabled: true,
    inputName: 'company',
  },
  {
    label: 'Status of Porcess',
    type: 'select',
    selectOptions: [],
    placeholder: 'Text',
    disabled: true,
    inputName: 'status',
  },
  {
    label: 'Relocation',
    type: 'select',
    placeholder: 'select',
    disabled: true,
    selectOptions: [],
    inputName: 'Email',
  },
]
const inputFiles = [
  {
    label: 'Resumen',
    inputName: 'resumen',
  },
  { label: 'Cover Letter', inputName: 'coverLetter' },
  { label: 'Reference Check', inputName: 'references' },
  { label: 'Free Agreement', inputName: 'freeAgreement' },
]
const useStyles = makeStyles((theme) => ({
  paper: {
    background: theme.palette.background.ligth,
    padding: theme.spacing(1),
    margin: theme.spacing(2, 0),
    marginTop: 0,
  },
  cell: {
    width: '100%',
    padding: theme.spacing(2),
  },
}))
export default function WriteTalentProfile({
  handleChange,
  handleSelectFile,
  files = {},
  form = {},
}) {
  const classes = useStyles()
  return (
    <>
      <Grid component={Paper} container className={classes.paper}>
        {inputs.map(
          ({
            inputName,
            type,
            selectOptions,
            label,
            placeholder,
            disabled,
            focused,
          }) => (
            <Grid
              key={label}
              item
              sm={12}
              md={6}
              lg={4}
              className={classes.cell}
            >
              {type === 'select' && (
                <MaterialSelectField
                  focused={focused}
                  disabled={disabled}
                  name={inputName}
                  onChange={handleChange}
                  placeholder={placeholder}
                  toplabel={label}
                  options={selectOptions}
                  value={form[inputName] || ''}
                />
              )}
              {type === 'text' && (
                <MaterialTextField
                  focused={focused}
                  disabled={disabled}
                  name={inputName}
                  value={form[inputName] || ''}
                  onChange={handleChange}
                  placeholder={placeholder}
                  toplabel={label}
                />
              )}
            </Grid>
          )
        )}
      </Grid>
      <Grid component={Paper} container className={classes.paper}>
        <Grid item xs={12} className={classes.cell}>
          <Typography variant="h6">Attachments</Typography>
        </Grid>
        {console.log(files['coverLetter'])}
        {inputFiles?.map(({ inputName, label }) => (
          <Grid key={label} item xs={12} className={classes.cell}>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="caption">
                <Box fontWeight={600} fontSize="1rem">
                  {label}
                </Box>
                <Box>
                  {files[inputName]?.name
                    ? files[inputName]?.name
                    : 'No files here'}
                </Box>
              </Typography>
              <label htmlFor={`btn-upload-${inputName}`}>
                <input
                  // value={files[inputName] || ''}
                  id={`btn-upload-${inputName}`}
                  name={inputName}
                  style={{ display: 'none' }}
                  type="file"
                  onChange={handleSelectFile}
                />
                <Button
                  id={`btn-upload-${inputName}`}
                  variant="outlined"
                  component="span"
                >
                  Upload new file
                </Button>
              </label>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Grid component={Paper} container className={classes.paper}>
        <Grid item xs={12} className={classes.cell}>
          <Typography variant="h6">Notas</Typography>
        </Grid>
        <Grid item xs={12} className={classes.cell}>
          <MaterialTextField
            name="notas"
            onChange={handleChange}
            fullWidth
            multiline
            rowsMax={3}
            placeholder="There???s no notes. Do you want to add a new one?"
          />
        </Grid>
      </Grid>
    </>
  )
}
