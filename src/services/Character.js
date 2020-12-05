import fetcher from '../utilities/fetcher'
import { rickAndMortyApi } from '../config'

const characterEndpoint = `${rickAndMortyApi}/character`

async function getCharacters(name = '', status = '') {
  const nameParam = `name=${name}`
  const statusParam = `status=${status}`
  const characters = await fetcher(`${characterEndpoint}/?${nameParam}&${statusParam}`)
  return characters.results
}

export default {
  get: getCharacters,
}
