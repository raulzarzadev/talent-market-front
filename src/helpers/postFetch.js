export default async function postFethc(url, data) {
  const api = process.env.NEXT_PUBLIC_URL_API
  return await fetch(`${api}${url}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error('Error:', error))
    .then((response) => console.log('Success:', response))
}
