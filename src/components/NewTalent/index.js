import MarketLayout from '@src/Layout/MarketLayout'
import TalentForm from '@comps/TalentForm'
export default function NewTalent({ talent, title }) {
  return (
    <MarketLayout
      Component={TalentForm}
      talent={talent}
      title={title}
      hideButtom
    />
  )
}
