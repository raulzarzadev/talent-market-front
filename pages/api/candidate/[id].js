import CANDIDATES from 'HARD-DATA/CANDIDATES'

export default (req, res) => {
  const candidates = CANDIDATES
  const {
    query: { id },
  } = req
  const data = candidates.find((candidate) => candidate.id === id)
  return res.status(200).json(data)
}
