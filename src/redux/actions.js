import {
  SHOW_LIST_VIEW,
  HIDE_LIST_VIEW,
  FETCH_SUGGESTION_SUCCESS,
  UPDATE_INPUT_FIELD,
  FETCH_DIRECTIONS_SUCCESS,
  UPDATE_COORD_ORIGIN_LAT,
  UPDATE_COORD_ORIGIN_LONG,
  UPDATE_COORD_DESTINATION_LAT,
  UPDATE_COORD_DESTINATION_LONG,
  REQUEST_SUGGEST,
  SUCCESS_SUGGEST
} from './constants'


export function showListView() {
  return {
    type: SHOW_LIST_VIEW
  }
}

export function hideListView() {
  return {
    type: HIDE_LIST_VIEW
  }
}

export function requestSuggest(query) {
  return {
    type: REQUEST_SUGGEST,
    query
  }
}

export function successSuggest(suggestions) {
  return {
    type: SUCCESS_SUGGEST,
    suggestions
  }
}

export function updateSuggestion(suggestions) {
  return {
    type: FETCH_SUGGESTION_SUCCESS,
    suggestions
  }
}

export function updateOriginInputField(location) {
  return {
    type: UPDATE_INPUT_FIELD.ORIGIN,
    location
  }
}

export function updateDestinationInputField(location) {
  return {
    type: UPDATE_INPUT_FIELD.DESTINATION,
    location
  }
}

export function updateOriginCoordLat(lat) {
  return {
    type: UPDATE_COORD_ORIGIN_LAT,
    lat
  }
}

export function updateOriginCoordLong(long) {
  return {
    type: UPDATE_COORD_ORIGIN_LONG,
    long
  }
}

export function updateDestinationCoordLat(lat) {
  return {
    type: UPDATE_COORD_DESTINATION_LAT,
    lat
  }
}

export function updateDestinationCoordLong(long) {
  return {
    type: UPDATE_COORD_DESTINATION_LONG,
    long
  }
}

// redux-thunk
export function fetchNewRoute(origin, destination, createNewRoute, mapboxClient) {
  return async (dispatch) => {
    let directions = null;
    try {
      if (origin && destination) {
        directions = await createNewRoute(origin, destination, mapboxClient)
      }
    } catch (e) {
      console.log(e) // I could dispatch(getNewRouteError(e))
    }

    dispatch(updateDirections(directions));
  }
}

export function updateDirections(directions) {
  return {
    type: FETCH_DIRECTIONS_SUCCESS,
    directions
  }
}


