import { makeStyles, useTheme } from '@material-ui/core/styles'

import { FormControl, FormLabel, TextField } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  input: {
    padding: theme.spacing(1),
    background: theme.palette.background.default,
    '&::placeholder': {
      color:  theme.palette.text.primary,
    },
  },
  toplabel:{
    color: theme.palette.text.labelligth,
    paddingBottom: theme.spacing(1)
  },
  
}))

export default function MaterialTextField({ children, toplabel, ...rest }) {
  const classes = useStyles()
  if (toplabel)
    return (
      <FormControl fullWidth>
        <FormLabel className={classes.toplabel} >{toplabel }</FormLabel>
        <TextField
          margin="none"
          size="small"
          {...rest}
          InputProps={{
            classes: { input: classes.input },
            disableUnderline: true,
          }}
        >
          {children}
        </TextField>
      </FormControl>
    )
  return (
    <TextField
      margin="none"
      size="small"
      {...rest}
      InputProps={{ classes: { input: classes.input }, disableUnderline: true }}
    >
      {children}
    </TextField>
  )
}
