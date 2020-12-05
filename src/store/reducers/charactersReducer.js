import {
  GET_CHARACTERS,
  SET_ERROR,
  SET_LOADING,
  SET_NAME_QUERY,
  SET_STATUS_QUERY,
} from '../action-types/characters'

const initialCharactersState = {
  characters: [],
  filteredCharacters: [],
  laoding: false,
  hasError: false,
  error: '',
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
        error: '',
        loading: false,
      }

    case SET_LOADING:
      return { ...state, loading: true }

    case SET_ERROR:
      return { ...state, hasError: true, error: action.payload, loading: false }

    case SET_NAME_QUERY:
      return { ...state, nameQuery: action.payload }

    case SET_STATUS_QUERY:
      return { ...state, statusQuery: action.payload }

    default:
      return state
  }
}
