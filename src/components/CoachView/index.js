import ButtonLink from '@comps/Link/ButtonLink'
import { Typography } from '@material-ui/core'

export default function CoachView({ coach }) {
  if (!coach) return 'Loading ...'
  return (
    <div className="flex-center column">
      <Typography variant="h4">Coach Details</Typography>
      <Typography variant="h5">{coach.name}</Typography>
      <Typography variant="h6">Recruiters</Typography>
     {/*  {coach?.assignedRecruiters.map((recruiter) => (
        <div key={recruiter}>
          {recruiter}
          <ButtonLink href={`/dashboard/recruiter/${recruiter}`}>
            visit
          </ButtonLink>
        </div>
      ))} */}
    </div>
  )
}
