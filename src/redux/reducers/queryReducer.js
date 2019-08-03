import {
    UPDATE_QUERY,
    FETCH_SUGGESTION_SUCCESS,
    UPDATE_INPUT_FIELD,
    FETCH_DIRECTIONS_SUCCESS,
    UPDATE_COORD_ORIGIN_LAT,
    UPDATE_COORD_ORIGIN_LONG,
    UPDATE_COORD_DESTINATION_LAT,
    UPDATE_COORD_DESTINATION_LONG,
    SUCCESS_SUGGEST
} from '../constants'

const initialState = {
    originQuery: '',
    destinationQuery: '',
    queryType: '',
    suggestions: [],
    originCoordLat: 29.727192549999998, 
    originCoordLong: -95.34905579098587,
    destinationCoordLat: 29.732862,
    destinationCoordLong: -95.353442,
    isOriginAnnotationShown: false,
    isDestinationAnnotationShown: false,
    routeGeometry: null
}

export default queryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_SUGGEST:
            return {
                ...state,
                suggestions: action.suggestions
            }   
        case UPDATE_QUERY:
            return {
                ...state,
                query: action.value
            }
        case FETCH_SUGGESTION_SUCCESS:
            return {
                ...state,
                suggestions: action.suggestions
            }
        case UPDATE_INPUT_FIELD.ORIGIN: {
            return {
                ...state,
                queryType: 'origin',
                isOriginAnnotationShown: true,
                originQuery: action.location
            }
        }
        case UPDATE_INPUT_FIELD.DESTINATION: {
            return {
                ...state,
                queryType: 'destination',
                isDestinationAnnotationShown: true,
                destinationQuery: action.location
            }
        }
        case UPDATE_COORD_ORIGIN_LAT: {
            return {
                ...state,
                originCoordLat: action.lat,
                isOriginAnnotationShown: true
            }
        }
        case UPDATE_COORD_ORIGIN_LONG: {
            return {
                ...state,
                originCoordLong: action.long,
                isOriginAnnotationShown: true
            }
        }
        case UPDATE_COORD_DESTINATION_LAT: {
            return {
                ...state,
                destinationCoordLat: action.lat,
                isDestinationAnnotationShown: true
            }
        }
        case UPDATE_COORD_DESTINATION_LONG: {
            return {
                ...state,
                destinationCoordLong: action.long,
                isDestinationAnnotationShown: true
            }
        }
        case FETCH_DIRECTIONS_SUCCESS: {
            return {
                ...state,
                routeGeometry: action.directions
            }
        }
        default: 
            return state
    }   
}