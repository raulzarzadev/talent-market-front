import USERS from 'HARD-DATA/USERS'

export default (req, res) => {
  const users = USERS
  const {
    query: { id },
  } = req
  const data = users.find((user) => user.id === id)
  res.status(200).json(data)
}
