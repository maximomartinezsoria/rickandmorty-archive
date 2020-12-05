import fetcher from '../utilities/fetcher'
import { rickAndMortyApi } from '../config'

const characterEndpoint = `${rickAndMortyApi}/character`

async function getCharacters(page) {
  const pageParam = `page=${page}`
  const characters = await fetcher(`${characterEndpoint}/?${pageParam}`)
  return characters.results
}

export default {
  get: getCharacters,
}
