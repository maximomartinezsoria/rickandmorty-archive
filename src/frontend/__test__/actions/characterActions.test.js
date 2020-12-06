import {
  getCharacters,
  setCharacters,
  filterCharacters,
  setNameQuery,
  setStatusQuery,
  orderCharactersBy,
  setError,
  setLoading,
} from '../../store/actions/charactersActions'
import {
  FILTER_CHARACTERS,
  SET_NAME_QUERY,
  SET_STATUS_QUERY,
  ORDER_CHARACTERS_POPULARLY,
  ORDER_CHARACTERS_ALPHABETICALLY,
  SET_ERROR,
  SET_LOADING,
  SET_CHARACTERS,
} from '../../store/action-types/characters'
import CharactersMock from '../../__mocks__/CharactersMock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

describe('Character actions', () => {
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)

  function getExpectedAction(type, payload) {
    return { type, payload }
  }

  beforeEach(() => {
    fetch.resetMocks()
  })

  test('getCharacters - expected actions should be dispatched on successful request', () => {
    fetch.mockResponseOnce(JSON.stringify({ results: CharactersMock }))
    const store = mockStore({})
    const expectedActions = [SET_LOADING, SET_CHARACTERS]

    return store.dispatch(getCharacters()).then(() => {
      const actualActions = store.getActions().map((action) => action.type)
      expect(actualActions).toEqual(expectedActions)
    })
  })

  test('getCharacters - expected actions should be dispatched on failed request', () => {
    const store = mockStore({})
    const expectedActions = [SET_LOADING, SET_ERROR]

    return store.dispatch(getCharacters()).then(() => {
      const actualActions = store.getActions().map((action) => action.type)
      expect(actualActions).toEqual(expectedActions)
    })
  })

  test('setCharacters action', () => {
    const expected = getExpectedAction(SET_CHARACTERS, { test: 'test' })
    expect(setCharacters({ test: 'test' })).toEqual(expected)
  })

  test('setError action', () => {
    const expected = getExpectedAction(SET_ERROR)
    expect(setError()).toEqual(expected)
  })

  test('setLoading action', () => {
    const expected = getExpectedAction(SET_LOADING)
    expect(setLoading()).toEqual(expected)
  })

  test('filterCharacters action', () => {
    const expected = getExpectedAction(FILTER_CHARACTERS)
    expect(filterCharacters()).toEqual(expected)
  })

  test('setNameQuery action', () => {
    const payload = 'rick'
    const expected = getExpectedAction(SET_NAME_QUERY, payload)
    expect(setNameQuery(payload)).toEqual(expected)
  })

  test('setStatusQuery action', () => {
    const payload = 'Dead'
    const expected = getExpectedAction(SET_STATUS_QUERY, payload)
    expect(setStatusQuery(payload)).toEqual(expected)
  })

  test('orderBy popular action', () => {
    const payload = 'popular'
    const expected = getExpectedAction(ORDER_CHARACTERS_POPULARLY, payload)
    expect(orderCharactersBy(payload)).toEqual(expected)
  })

  test('orderBy name action', () => {
    const payload = 'name'
    const expected = getExpectedAction(ORDER_CHARACTERS_ALPHABETICALLY, payload)
    expect(orderCharactersBy(payload)).toEqual(expected)
  })
})
