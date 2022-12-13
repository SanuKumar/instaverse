const storyReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_STORIES":
      return action.payload
    case "CREATE_STORIES":
      return [...state, action.payload]
    case "UPDATE_STORIES":
      return state.map(story => story._id === action.payload._id ? action.payload : story)
    default:
      return state
  }
}

export default storyReducer