import { makeStyles } from '@material-ui/core'
import NextLink from 'next/link'

const useStyles = makeStyles((theme) => ({
  link: {
    cursor: 'pointer',
    color: 'inherit',
    textDecoration: 'none',
  },
}))
export default function Link({ children, href, disabled }) {
  const classes = useStyles()

  return (
    <NextLink href={disabled ? '' : href}>
      <a className={classes.link}>{children}</a>
    </NextLink>
  )
}
