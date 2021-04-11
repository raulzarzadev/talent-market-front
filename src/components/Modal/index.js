import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ModalMaterial from '@material-ui/core/Modal'
import { IconButton, Paper, Typography } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import PropTypes from 'prop-types'
const height = 'auto'
const width = '550px'
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 150,
  },
  paper: {
    maxWidth: width,
    maxHeight: height,
    minHeight: 150,
    minWidth: 250,
    backgroundColor: theme.palette.background.default,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 2, 1.5),
  },
}))

export default function Modal({ handleClose, open = false, children, title }) {
  const classes = useStyles()

  return (
    <ModalMaterial
      open={open}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className={classes.modal}
    >
      <Paper className={classes.paper}>
        <header className={classes.header}>
          <Typography variant="h6">{title}</Typography>
          <IconButton color="inherit" onClick={handleClose} size="small">
            <Close />
          </IconButton>
        </header>
        <main className={classes.main}>{children}</main>
        <footer className={classes.footer}></footer>
      </Paper>
    </ModalMaterial>
  )
}

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}
