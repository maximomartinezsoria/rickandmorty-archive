import {
  SET_CHARACTERS,
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
  dispatch(setLoading())

  try {
    const [characters, statusCode] = await Character.get()
    // statusCode is not 2**
    if (Math.floor(statusCode / 100) !== 2) throw new Error()

    dispatch(setCharacters(characters))
  } catch (error) {
    console.log(error)
    dispatch(setError())
  }
}

export const setCharacters = (characters) => {
  return {
    type: SET_CHARACTERS,
    payload: characters,
  }
}

export const setLoading = () => {
  return {
    type: SET_LOADING,
  }
}

export const setError = () => {
  return {
    type: SET_ERROR,
  }
}

export const filterCharacters = () => {
  return {
    type: FILTER_CHARACTERS,
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
