import {
  SET_CHARACTERS,
  SET_LOADING,
  SET_ERROR,
  FILTER_CHARACTERS,
  ORDER_CHARACTERS_ALPHABETICALLY,
  ORDER_CHARACTERS_POPULARLY,
  SET_NAME_QUERY,
  SET_STATUS_QUERY,
} from '../../store/action-types/characters'
import charactersReducer from '../../store/reducers/charactersReducer'

describe('Characters reducer', () => {
  test(SET_CHARACTERS, () => {
    const characters = [
      { name: 'Rick', status: 'Dead' },
      { name: 'Morty', status: 'Alive' },
    ]
    const initialState = {
      characters: [],
      filteredCharacters: [],
      popularlyOrderedCharacters: [],
      hasError: true,
      loading: true,
    }
    const action = { type: SET_CHARACTERS, payload: characters }
    const expected = {
      characters,
      filteredCharacters: characters,
      popularlyOrderedCharacters: characters,
      hasError: false,
      loading: false,
    }

    expect(charactersReducer(initialState, action)).toEqual(expected)
  })

  test(SET_LOADING, () => {
    const loading = true
    const initialState = { loading: false }
    const action = { type: SET_LOADING, payload: loading }
    const expected = { loading }

    expect(charactersReducer(initialState, action)).toEqual(expected)
  })

  test(SET_ERROR, () => {
    const hasError = true
    const initialState = { hasError: false, loading: true }
    const action = { type: SET_ERROR, payload: hasError }
    const expected = { hasError, loading: false }

    expect(charactersReducer(initialState, action)).toEqual(expected)
  })

  test(FILTER_CHARACTERS, () => {
    const characters = [
      { name: 'Rick', status: 'Dead' },
      { name: 'Morty', status: 'Alive' },
    ]
    const filteredCharacters = [{ name: 'Rick', status: 'Dead' }]
    const initialState = {
      characters,
      filteredCharacters: [],
      statusQuery: 'Dead',
      nameQuery: 'Rick',
    }
    const action = { type: FILTER_CHARACTERS }
    const expected = {
      characters,
      filteredCharacters,
      statusQuery: 'Dead',
      nameQuery: 'Rick',
    }

    expect(charactersReducer(initialState, action)).toEqual(expected)
  })

  test(ORDER_CHARACTERS_ALPHABETICALLY, () => {
    const unorderedCharacters = [{ name: 'b' }, { name: 'a' }, { name: 'c' }]
    const orderedCharacters = [{ name: 'a' }, { name: 'b' }, { name: 'c' }]
    const initialState = {
      characters: unorderedCharacters,
      filteredCharacters: unorderedCharacters,
      alphabeticallyOrderedCharacters: [],
    }
    const action = { type: ORDER_CHARACTERS_ALPHABETICALLY }
    const expected = {
      characters: orderedCharacters,
      filteredCharacters: orderedCharacters,
      alphabeticallyOrderedCharacters: orderedCharacters,
    }

    expect(charactersReducer(initialState, action)).toEqual(expected)
  })

  test(ORDER_CHARACTERS_POPULARLY, () => {
    const unorderedCharacters = [{ id: 2 }, { id: 1 }]
    const orderedCharacters = [{ id: 1 }, { id: 2 }]
    const initialState = {
      popularlyOrderedCharacters: orderedCharacters,
      characters: [],
      filteredCharacters: unorderedCharacters,
    }
    const action = { type: ORDER_CHARACTERS_POPULARLY }
    const expected = {
      characters: orderedCharacters,
      filteredCharacters: orderedCharacters,
      popularlyOrderedCharacters: orderedCharacters,
    }

    expect(charactersReducer(initialState, action)).toEqual(expected)
  })

  test(SET_NAME_QUERY, () => {
    const nameQuery = 'rick'
    const initialState = { nameQuery: '' }
    const action = { type: SET_NAME_QUERY, payload: nameQuery }
    const expected = { nameQuery }

    expect(charactersReducer(initialState, action)).toEqual(expected)
  })

  test(SET_STATUS_QUERY, () => {
    const statusQuery = 'Dead'
    const initialState = { statusQuery: '' }
    const action = { type: SET_STATUS_QUERY, payload: statusQuery }
    const expected = { statusQuery }

    expect(charactersReducer(initialState, action)).toEqual(expected)
  })
})
