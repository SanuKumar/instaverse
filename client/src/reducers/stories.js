const storyReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_STORIES":
      return action.payload
    case "CREATE_STORIES":
      return [...state, action.payload]
    default:
      return state
  }
}

export default storyReducer