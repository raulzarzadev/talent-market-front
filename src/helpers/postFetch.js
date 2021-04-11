export default async function postFetch(url, data, method='POST') {
  const api = process.env.NEXT_PUBLIC_URL_API
  return await fetch(`${api}${url}`, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error('Error:', error))
    .then((response) => console.log('Success:', response))
}
