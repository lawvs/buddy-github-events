import {
  FETCH_PROFILE_REQUESTED,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
  FETCH_EVENTS_REQUESTED,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE,
  CHANGE_NAME,
  CHANGE_EVENT_TYPE,
  FETCH_MORE_EVENTS_FAILURE,
  FETCH_MORE_EVENTS_REQUESTED,
  FETCH_MORE_EVENTS_SUCCESS,
} from './constants'
import { MainActionTypes, MainState } from './types'
import { GithubEventsType } from '../../api'

const initState: MainState = {
  loading: false,
  username: '',
  currentPage: 1,
  isTheLastPage: false,
  eventType: GithubEventsType.EVENTS,
}

export default (state = initState, action: MainActionTypes): MainState => {
  switch (action.type) {
    case FETCH_PROFILE_REQUESTED: {
      return {
        ...state,
        profileInfo: undefined,
      }
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
        events: undefined,
        currentPage: 1,
        isTheLastPage: false,
        error: undefined,
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

    // fetch more events
    case FETCH_MORE_EVENTS_REQUESTED: {
      return {
        ...state,
        loading: true,
        error: undefined,
      }
    }
    case FETCH_MORE_EVENTS_SUCCESS: {
      const {
        payload: { events, page, isTheLastPage },
      } = action
      return {
        ...state,
        loading: false,
        isTheLastPage,
        currentPage: page,
        events: [...(state.events ?? []), ...events],
      }
    }
    case FETCH_MORE_EVENTS_FAILURE: {
      const { error } = action
      return {
        ...state,
        error,
        loading: false,
      }
    }

    case CHANGE_NAME: {
      const {
        payload: { username },
      } = action
      return {
        ...state,
        username,
      }
    }
    case CHANGE_EVENT_TYPE: {
      const {
        payload: { eventType },
      } = action
      return {
        ...state,
        eventType,
      }
    }
    default:
      return state
  }
}
