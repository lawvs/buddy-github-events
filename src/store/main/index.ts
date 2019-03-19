import {
  FETCH_PROFILE_REQUESTED,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
  FETCH_EVENTS_REQUESTED,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE,
} from './constants'
import { MainActionTypes, MainState } from './types'

const initState: MainState = {
  error: null,
  loading: false,
}

export default (state = initState, action: MainActionTypes): MainState => {
  switch (action.type) {
    case FETCH_PROFILE_REQUESTED: {
      return state
    }
    case FETCH_PROFILE_SUCCESS: {
      const {
        payload: { profileInfo },
      } = action
      return {
        ...state,
        profileInfo,
      }
    }
    case FETCH_PROFILE_FAILURE: {
      return state
    }
    case FETCH_EVENTS_REQUESTED: {
      return {
        ...state,
        loading: true,
        error: null,
      }
    }
    case FETCH_EVENTS_SUCCESS: {
      const {
        payload: { events },
      } = action
      return {
        ...state,
        loading: false,
        events,
      }
    }
    case FETCH_EVENTS_FAILURE: {
      const { error } = action
      return {
        ...state,
        error,
        loading: false,
      }
    }
    default:
      return state
  }
}
