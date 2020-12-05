import { GET_CHARACTERS } from '../action-types/characters'
import Character from '../../services/Character'

export const getCharacters = () => async (dispatch) => {
  // TODO: handle loafing
  try {
    const characters = await Character.get()

    dispatch({
      type: GET_CHARACTERS,
      payload: characters,
    })
  } catch (error) {
    // TODO: handle error
  }
}
