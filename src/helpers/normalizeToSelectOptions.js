export default function normalizeToSelectOptions(res = []) {
  return res.reduce((acc, curr) => {
    const userOption = { label: curr.name, value: curr._id }
    return [...acc, userOption]
  }, [])
}
