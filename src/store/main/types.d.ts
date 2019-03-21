import { Event } from 'parse-github-event'

import {
  FETCH_PROFILE_REQUESTED,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
  FETCH_EVENTS_REQUESTED,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE,
} from './constants'
import { GithubUser } from '../../api/types'
import { GithubEventsType } from '../../api'

// main state
export interface MainState {
  readonly error: Error | null
  readonly loading: boolean
  readonly username?: string
  readonly eventType: GithubEventsType
  readonly profileInfo?: GithubUser
  readonly events: Event[]
}

// actions
export interface FetchProfileRequestedAction {
  type: typeof FETCH_PROFILE_REQUESTED
}

export interface FetchProfileSuccessAction {
  type: typeof FETCH_PROFILE_SUCCESS
  payload: {
    profileInfo: MainState['profileInfo']
  }
}

export interface FetchProfileFailureAction {
  type: typeof FETCH_PROFILE_FAILURE
  error: MainState['error']
}

export type FetchProfileActionTypes =
  | FetchProfileRequestedAction
  | FetchProfileSuccessAction
  | FetchProfileFailureAction

export interface FetchEventsRequestedAction {
  type: typeof FETCH_EVENTS_REQUESTED
}

export interface FetchEventsSuccessAction {
  type: typeof FETCH_EVENTS_SUCCESS
  payload: {
    events: MainState['events']
  }
}

export interface FetchEventsFailureAction {
  type: typeof FETCH_EVENTS_FAILURE
  error: MainState['error']
}

export type FetchEventsActionTypes =
  | FetchEventsRequestedAction
  | FetchEventsSuccessAction
  | FetchEventsFailureAction

export type MainActionTypes = FetchProfileActionTypes | FetchEventsActionTypes
