import * as api from "../api"

export const getStories = () => async (dispatch) => {
  try {
    const { data } = await api.fetchStories()
    dispatch({
      type: "FETCH_ALL_STORIES",
      payload: data
    })
  } catch (error) {
    console.log(error.message)
  }
}
