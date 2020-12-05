import fetcher from '../utilities/fetcher'
import { rickAndMortyApi } from '../config'

const characterEndpoint = `${rickAndMortyApi}/character`

async function getCharacters(name = '', status = '') {
  const nameParam = `name=${name}`
  const statusParam = `status=${status}`
  const endpoint = `${characterEndpoint}/?${nameParam}&${statusParam}`
  const [characters, statusCode] = await fetcher(endpoint)
  return [characters.results, statusCode]
}

export default {
  get: getCharacters,
}
