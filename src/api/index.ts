import { GithubApi } from 'parse-github-event/lib/types'

const GITHUB_API = 'https://api.github.com'

export const fetchGithubProfileApi = (name: string): Promise<GithubApi.User> =>
  fetch(`${GITHUB_API}/users/${name}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText)
    }
    return resp.json() as Promise<GithubApi.User>
  })

export enum GithubEventsType {
  EVENTS,
  RECEIVED_EVENTS,
}

// @see https://developer.github.com/v3/activity/events/#list-events-that-a-user-has-received
export const fetchGithubEventsApi = (
  name: string,
  type: GithubEventsType,
): Promise<GithubApi.GithubEvent[]> =>
  fetch(
    type === GithubEventsType.EVENTS
      ? `${GITHUB_API}/users/${name}/events`
      : `${GITHUB_API}/users/${name}/received_events`,
  ).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText)
    }
    return resp.json() as Promise<GithubApi.GithubEvent[]>
  })
