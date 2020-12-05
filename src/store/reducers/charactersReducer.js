import { GET_CHARACTERS } from '../action-types/characters'

const initialCharactersState = {
  characters: [],
  laoding: false,
  error: null,
}

export default function charactersReducer(state = initialCharactersState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return { ...state, characters: action.payload }

    default:
      return state
  }
}
