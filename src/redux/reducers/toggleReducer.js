import { HIDE_LIST_VIEW, SHOW_LIST_VIEW } from '../constants'

const initialState = {
  isShown: false
}

export default locationResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIDE_LIST_VIEW:
      return {
        isShown: false
      }
    case SHOW_LIST_VIEW:
      return {
        isShown: true
      }
    default:
      return state
  }
}