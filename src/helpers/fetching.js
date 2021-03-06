const api = process.env.NEXT_PUBLIC_URL_API

export default async function fetching(endpoint) {
  const res = await fetch(`${api}${endpoint}`).then((res) => res.json())
  // console.log(res)
  if (res.ok) return res.data
  return { ok: false }
}
