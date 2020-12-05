import { GET_CHARACTERS } from '../action-types/characters'
import { getCharacters } from '../../services/Character'

export const getProjects = () => async (dispatch) => {
  // TODO: handle loafing
  try {
    const characters = await getCharacters()

    dispatch({
      type: GET_CHARACTERS,
      payload: characters,
    })
  } catch (error) {
    // TODO: handle error
  }
}
