import MarketLayout from '@src/Layout/MarketLayout'
import TalentForm from '@comps/TalentForm'
export default function NewTalent({ talent }) {
  return (
    <MarketLayout
      Component={TalentForm}
      talent={talent}
      title="New Talet"
      hideButtom
    />
  )
}
