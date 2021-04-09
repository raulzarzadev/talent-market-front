import USERS from 'HARD-DATA/USERS'

export default (req, res) => {
  const users = USERS
  const { method } = req
  if (method === 'POST') {
    res.status(200).json({ ok: true, type: 'USER_CREATED' })
  } else {
    res.status(200).json(users)
  }
}
