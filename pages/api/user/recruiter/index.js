import USERS from 'HARD-DATA/USERS'

export default (req, res) => {
  const users = USERS
  const data = users.filter((user) => user.rol.includes('recruiter'))
  res.status(200).json(data)
}
