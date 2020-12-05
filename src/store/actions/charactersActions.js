import { GET_CHARACTERS, SET_STATUS_QUERY, SET_NAME_QUERY } from '../action-types/characters'
import Character from '../../services/Character'

export const getCharacters = (page, name = '', status = '') => async (dispatch) => {
  // TODO: handle loafing
  try {
    const characters = await Character.get(page, name, status)

    dispatch({
      type: GET_CHARACTERS,
      payload: characters,
    })
  } catch (error) {
    // TODO: handle error
  }
}

export const setStatusQuery = (statusQuery) => {
  return {
    type: SET_STATUS_QUERY,
    payload: statusQuery,
  }
}

export const setNameQuery = (nameQuery) => {
  return {
    type: SET_NAME_QUERY,
    payload: nameQuery,
  }
}
