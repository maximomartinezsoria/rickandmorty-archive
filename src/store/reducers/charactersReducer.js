import {
  GET_CHARACTERS,
  SET_ERROR,
  SET_LOADING,
  SET_NAME_QUERY,
  SET_STATUS_QUERY,
  FILTER_CHARACTERS,
} from '../action-types/characters'

const initialCharactersState = {
  characters: [],
  filteredCharacters: [],
  laoding: false,
  hasError: false,

  nameQuery: '',
  statusQuery: '',
}

export default function charactersReducer(state = initialCharactersState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        filteredCharacters: action.payload,
        hasError: false,
        loading: false,
      }

    case SET_LOADING:
      return { ...state, loading: true }

    case SET_ERROR:
      return { ...state, hasError: true, loading: false }

    case FILTER_CHARACTERS:
      const filteredCharacters = state.characters.filter((character) => {
        const { name, status } = character
        const nameRegex = new RegExp(state.nameQuery, 'i')
        const statusAreEqual = state.statusQuery.toLowerCase() === status.toLowerCase()
        const hasQueryStatus = !state.statusQuery || statusAreEqual

        return name.match(nameRegex) && hasQueryStatus
      })

      return { ...state, filteredCharacters }

    case SET_NAME_QUERY:
      return { ...state, nameQuery: action.payload }

    case SET_STATUS_QUERY:
      return { ...state, statusQuery: action.payload }

    default:
      return state
  }
}
