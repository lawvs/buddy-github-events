import { GithubApi } from 'parse-github-event/lib/types'

import {
  FETCH_PROFILE_REQUESTED,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
  FETCH_EVENTS_REQUESTED,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE,
  FETCH_MORE_EVENTS_REQUESTED,
  FETCH_MORE_EVENTS_SUCCESS,
  FETCH_MORE_EVENTS_FAILURE,
  CHANGE_NAME,
  CHANGE_EVENT_TYPE,
} from './constants'
import { GithubEventsType } from '../../api'

// main state
export interface MainState {
  readonly error?: string
  readonly loading: boolean
  readonly username: string
  readonly currentPage: number
  readonly isTheLastPage: boolean
  readonly eventType: GithubEventsType
  readonly profileInfo?: GithubApi.User
  readonly events?: GithubApi.GithubEvent[]
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

// fetch the first page events

export interface FetchEventsRequestedAction {
  type: typeof FETCH_EVENTS_REQUESTED
}

export interface FetchEventsSuccessAction {
  type: typeof FETCH_EVENTS_SUCCESS
  payload: {
    events: NonNullable<MainState['events']>
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

// fetch more events

export interface FetchMoreEventsRequestedAction {
  type: typeof FETCH_MORE_EVENTS_REQUESTED
}

export interface FetchMoreEventsSuccessAction {
  type: typeof FETCH_MORE_EVENTS_SUCCESS
  payload: {
    events: NonNullable<MainState['events']>
    isTheLastPage: boolean
    page: number
  }
}

export interface FetchMoreEventsFailureAction {
  type: typeof FETCH_MORE_EVENTS_FAILURE
  error: MainState['error']
}

export type FetchMoreEventsActionTypes =
  | FetchMoreEventsRequestedAction
  | FetchMoreEventsSuccessAction
  | FetchMoreEventsFailureAction

export interface ChangeNameType {
  type: typeof CHANGE_NAME
  payload: {
    username: string
  }
}

export interface ChangeEventTypeType {
  type: typeof CHANGE_EVENT_TYPE
  payload: {
    eventType: GithubEventsType
  }
}

export type MainActionTypes =
  | FetchProfileActionTypes
  | FetchEventsActionTypes
  | FetchMoreEventsActionTypes
  | ChangeNameType
  | ChangeEventTypeType
