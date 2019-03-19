import { parse, ParsedEvent } from 'parse-github-event'

import { fetchGithubProfileApi, fetchGithubEventsApi } from '../../api'
import {
  FETCH_PROFILE_REQUESTED,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
  FETCH_EVENTS_REQUESTED,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE,
} from './constants'
import { AppThunkDispatch } from '../types'

// Action Creators
export const fetchProfile = (name: string) => async (dispatch: AppThunkDispatch) => {
  dispatch({ type: FETCH_PROFILE_REQUESTED })
  try {
    const profileInfo = await fetchGithubProfileApi(name)
    dispatch({ type: FETCH_PROFILE_SUCCESS, payload: { profileInfo } })
  } catch (error) {
    dispatch({ type: FETCH_PROFILE_FAILURE, error })
  }
}

export const fetchEvent = (name: string) => async (dispatch: AppThunkDispatch) => {
  dispatch({ type: FETCH_EVENTS_REQUESTED })
  try {
    const githubEvents = await fetchGithubEventsApi(name)
    const githubEventsParsed = githubEvents
      .map(parse)
      .filter((e): e is ParsedEvent => e !== undefined)
    dispatch({
      type: FETCH_EVENTS_SUCCESS,
      payload: { events: githubEventsParsed },
    })
  } catch (error) {
    dispatch({ type: FETCH_EVENTS_FAILURE, error })
  }
}
