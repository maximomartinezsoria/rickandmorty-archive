import fetcher from '../utilities/fetcher'
import { rickAndMortyApi } from '../config'

const characterEndpoint = `${rickAndMortyApi}/character`

async function getCharacters(page, name = '', status = '') {
  const pageParam = `page=${page}`
  const nameParam = `name=${name}`
  const statusParam = `status=${status}`
  const characters = await fetcher(`${characterEndpoint}/?${pageParam}&${nameParam}&${statusParam}`)
  return characters.results
}

export default {
  get: getCharacters,
}
