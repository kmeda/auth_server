export var stockCodesReducer = (state={}, action) => {
  switch (action.type) {
    case "ADD_STOCK_CODES":
      return action.payload
    default:
      return state;
  }
}

