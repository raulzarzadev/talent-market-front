import CANDIDATES from 'HARD-DATA/CANDIDATES'

export default (req, res) => {
  const candidates = CANDIDATES
  const { method } = req
  if (method === 'POST') {
    return res.status(200).json({ ok: true, type: 'RESOURCE_UPDATED' })
  } else {
    return res.status(200).json(candidates)
  }
}
