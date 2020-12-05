import { GET_CHARACTERS, SET_NAME_QUERY, SET_STATUS_QUERY } from '../action-types/characters'

const initialCharactersState = {
  characters: [],
  filteredCharacters: [],
  laoding: false,
  error: null,
  nameQuery: '',
  statusQuery: '',
}

export default function charactersReducer(state = initialCharactersState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return { ...state, characters: action.payload, filteredCharacters: action.payload }

    case SET_NAME_QUERY:
      return { ...state, nameQuery: action.payload }

    case SET_STATUS_QUERY:
      return { ...state, statusQuery: action.payload }

    default:
      return state
  }
}
