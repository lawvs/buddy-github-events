import { fetchGithubProfileApi, fetchGithubEventsApi, GithubEventsType } from '../../api'
import {
  FETCH_PROFILE_REQUESTED,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
  FETCH_EVENTS_REQUESTED,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE,
  CHANGE_NAME,
  CHANGE_EVENT_TYPE,
} from './constants'
import { AppThunkDispatch, GlobalState } from '../types'
import { ChangeNameType, ChangeEventTypeType } from './types'

// Action Creators
export const fetchProfile = () => async (
  dispatch: AppThunkDispatch,
  getState: () => GlobalState,
) => {
  const {
    mainState: { username },
  } = getState()

  if (!username) {
    dispatch({ type: FETCH_EVENTS_FAILURE, error: 'Username can not be empty' })
    return
  }
  dispatch({ type: FETCH_PROFILE_REQUESTED })
  try {
    const profileInfo = await fetchGithubProfileApi(username)
    dispatch({ type: FETCH_PROFILE_SUCCESS, payload: { profileInfo } })
  } catch (error) {
    dispatch({ type: FETCH_PROFILE_FAILURE, error: error.message })
  }
}

export const fetchEvent = () => async (dispatch: AppThunkDispatch, getState: () => GlobalState) => {
  const {
    mainState: { username, eventType },
  } = getState()

  if (!username) {
    dispatch({ type: FETCH_EVENTS_FAILURE, error: 'Username can not be empty' })
    return
  }
  dispatch({ type: FETCH_EVENTS_REQUESTED })
  try {
    const githubEvents = await fetchGithubEventsApi(username, eventType)
    dispatch({
      type: FETCH_EVENTS_SUCCESS,
      payload: { events: githubEvents },
    })
  } catch (error) {
    dispatch({ type: FETCH_EVENTS_FAILURE, error: error.message })
  }
}

export const changeName = (username: string): ChangeNameType => ({
  type: CHANGE_NAME,
  payload: {
    username,
  },
})

export const changeEventType = (eventType: GithubEventsType): ChangeEventTypeType => ({
  type: CHANGE_EVENT_TYPE,
  payload: {
    eventType,
  },
})
