import ButtonLink from '@comps/Link/ButtonLink'
import { Typography } from '@material-ui/core'

export default function RecruiterView({ recruiter }) {
  console.log(recruiter)
  return (
    <div className="flex-center column">
      <Typography variant="h4">Recruiter Details</Typography>
      <Typography variant="h5">{recruiter.name}</Typography>
      <Typography variant="h6">Candidates</Typography>
      {recruiter?.candidates?.map((candidate) => (
        <div key={candidate}>
          {candidate}
          <ButtonLink href={`/dashboard/market/${candidate}`}>
            visit
          </ButtonLink>
        </div>
      ))}
    </div>
  )
}
