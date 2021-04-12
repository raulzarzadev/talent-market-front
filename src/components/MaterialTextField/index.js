import { makeStyles, useTheme } from '@material-ui/core/styles'

import { FormControl, FormLabel, TextField } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  input: {
    padding: theme.spacing(1),
    background: theme.palette.background.default,
    '&::placeholder': {
      color: theme.palette.text.primary,
    },
  },
  toplabel: {
    color: theme.palette.text.labelligth,
    paddingBottom: theme.spacing(1),
  },
}))

export default function MaterialTextField({
  children,
  toplabel,
  disabled,
  focused,
  ...rest
}) {
  const classes = useStyles()
  if (toplabel)
    return (
      <FormControl
        fullWidth
        style={{ opacity: disabled && '0.3' }}
        focused={focused}
      >
        <FormLabel className={classes.toplabel}>{toplabel}</FormLabel>
        <TextField
          disabled={disabled}
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
      focused={focused}
      style={{ opacity: disabled && '0.3' }}
      disabled={disabled}
      margin="none"
      size="small"
      {...rest}
      InputProps={{ classes: { input: classes.input }, disableUnderline: true }}
    >
      {children}
    </TextField>
  )
}
