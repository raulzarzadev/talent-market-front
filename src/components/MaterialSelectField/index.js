import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { FormControl, FormLabel, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
const useStyles = makeStyles((theme) => ({
  placeholder: {
    color: '#aaa',
    fontSize: '.7rem',
  },
  select: {
    color: theme.palette.text.secondary,
  },
  input: {
    padding: theme.spacing(0.5),
    background: theme.palette.background.default,
    marginTop: theme.spacing(1),
  },
  toplabel: {
    color: theme.palette.text.labelligth,
  },
}))

const Placeholder = ({ children }) => {
  const classes = useStyles()
  return <div className={classes.placeholder}>{children}</div>
}
export default function MaterialSelectField({
  placeholder,
  value = '',
  onChange,
  options = [],
  toplabel,
  ...rest
}) {
  const classes = useStyles()

  if (toplabel)
    return (
      <FormControl fullWidth>
        <FormLabel className={classes.toplabel}>
          {toplabel}
          <Select
            fullWidth
            value={value}
            displayEmpty
            onChange={onChange}
            disableUnderline
            className={classes.input}
            renderValue={
              value !== '' && placeholder
                ? undefined
                : () => <Placeholder>{placeholder}</Placeholder>
            }
            {...rest}
          >
            {options.map((option) => (
              <MenuItem
                key={option.value}
                value={option.value}
                className={classes.select}
              >
                <Typography color="inherit">{option.label}</Typography>
              </MenuItem>
            ))}
          </Select>
        </FormLabel>
      </FormControl>
    )

  return (
    <Select
      value={value}
      displayEmpty
      onChange={onChange}
      disableUnderline
      renderValue={
        value !== '' && placeholder
          ? undefined
          : () => <Placeholder>{placeholder}</Placeholder>
      }
      {...rest}
    >
      {options.map((option) => (
        <MenuItem
          key={option.value}
          value={option.value}
          className={classes.select}
        >
          <Typography color="inherit">{option.label}</Typography>
        </MenuItem>
      ))}
    </Select>
  )
}

MaterialSelectField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  toplabel: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
