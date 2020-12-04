export default async function fetcher(endpoint) {
  const response = await fetch(endpoint)
  const responseJson = await response.json()
  return responseJson
}
