import {
  GET_CHARACTERS,
  FILTER_CHARACTERS,
  SET_ERROR,
  SET_LOADING,
  SET_NAME_QUERY,
  SET_STATUS_QUERY,
  ORDER_CHARACTERS_ALPHABETICALLY,
  ORDER_CHARACTERS_POPULARLY,
} from '../action-types/characters'
import Character from '../../services/Character'

export const getCharacters = () => async (dispatch) => {
  dispatch({ type: SET_LOADING })

  try {
    const [characters, statusCode] = await Character.get()
    // statusCode is not 2**
    if (Math.floor(statusCode / 100) !== 2) throw new Error()

    dispatch({
      type: GET_CHARACTERS,
      payload: characters,
    })
  } catch (error) {
    console.log(error)
    dispatch({
      type: SET_ERROR,
    })
  }
}

export const filterCharacters = (query) => {
  return {
    type: FILTER_CHARACTERS,
    payload: query,
  }
}

export const setNameQuery = (nameQuery) => {
  return {
    type: SET_NAME_QUERY,
    payload: nameQuery,
  }
}

export const setStatusQuery = (statusQuery) => {
  return {
    type: SET_STATUS_QUERY,
    payload: statusQuery,
  }
}

export const orderCharactersBy = (orderBy) => {
  const type = orderBy === 'popular' ? ORDER_CHARACTERS_POPULARLY : ORDER_CHARACTERS_ALPHABETICALLY
  return {
    type,
    payload: orderBy,
  }
}
