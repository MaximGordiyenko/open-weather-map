export function todosReducer(state = { loading: false, cast: [], error: null }, action) {
  switch (action.type) {
    case "GET_STARTED":
      return {
        ...state,
        loading: true
      };
    case "GET_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        cast: [...state.cast, action.payload]
      };
    case "GET_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
