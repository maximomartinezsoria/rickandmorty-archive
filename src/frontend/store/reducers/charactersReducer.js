import {
  SET_CHARACTERS,
  SET_ERROR,
  SET_LOADING,
  SET_NAME_QUERY,
  SET_STATUS_QUERY,
  FILTER_CHARACTERS,
  ORDER_CHARACTERS_ALPHABETICALLY,
  ORDER_CHARACTERS_POPULARLY,
} from '../action-types/characters'

const initialCharactersState = {
  characters: [],
  filteredCharacters: [],
  popularlyOrderedCharacters: [],
  alphabeticallyOrderedCharacters: [],
  laoding: false,
  hasError: false,

  nameQuery: '',
  statusQuery: '',
}

export default function charactersReducer(state = initialCharactersState, action) {
  switch (action.type) {
    case SET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        filteredCharacters: action.payload,
        popularlyOrderedCharacters: action.payload,
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

    case ORDER_CHARACTERS_ALPHABETICALLY:
      const alphabeticallyCompareFn = (a, b) => a.name.localeCompare(b.name)
      const alphabeticallyOrderedCharacters =
        state.alphabeticallyOrderedCharacters.length > 0
          ? state.alphabeticallyOrderedCharacters
          : [...state.characters].sort(alphabeticallyCompareFn)

      return {
        ...state,
        characters: alphabeticallyOrderedCharacters,
        alphabeticallyOrderedCharacters,
        filteredCharacters: [...state.filteredCharacters].sort(alphabeticallyCompareFn),
      }

    case ORDER_CHARACTERS_POPULARLY:
      const popularlyCompareFn = (a, b) => a.id - b.id

      return {
        ...state,
        characters: state.popularlyOrderedCharacters,
        filteredCharacters: [...state.filteredCharacters].sort(popularlyCompareFn),
      }

    case SET_NAME_QUERY:
      return { ...state, nameQuery: action.payload }

    case SET_STATUS_QUERY:
      return { ...state, statusQuery: action.payload }

    default:
      return state
  }
}
