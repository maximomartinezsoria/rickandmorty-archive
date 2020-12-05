import {
  GET_CHARACTERS,
  SET_STATUS_QUERY,
  SET_NAME_QUERY,
  SET_ERROR,
  SET_LOADING,
} from '../action-types/characters'
import Character from '../../services/Character'

export const getCharacters = (name = '', status = '') => async (dispatch) => {
  dispatch({ type: SET_LOADING })

  try {
    const [characters, statusCode] = await Character.get(name, status)
    // statusCode is 4**
    if (Math.floor(statusCode / 100) === 4) {
      throw new Error('notFound')
    }

    dispatch({
      type: GET_CHARACTERS,
      payload: characters,
    })
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: error.message,
    })
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
