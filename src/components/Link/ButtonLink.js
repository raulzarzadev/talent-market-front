import { Button } from '@material-ui/core'
import NextLink from 'next/link'

export default function ButtonLink(props) {
  return (
    <NextLink href={props?.href}>
      <Button {...props}>{props?.children}</Button>
    </NextLink>
  )
}
