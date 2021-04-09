import ButtonLink from '@comps/Link/ButtonLink'
import { Box, Typography } from '@material-ui/core'

export default function PrincipalView({ principal }) {
  console.log(principal)
  return (
    <div className='flex-center column'>
      <Typography variant="h4"> Principal </Typography>
      {principal.name}
      <Typography variant="h5">Coaches</Typography>
      {principal.assignedCoaches.map((coach) => (
        <Box m={2} key={coach} className="flex-center">
          <Typography>{coach}</Typography>
          <ButtonLink href={`/dashboard/coach/${coach}`} variant="outlined">
            {'Vist'}
          </ButtonLink>
        </Box>
      ))}
    </div>
  )
}
