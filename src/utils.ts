import { fetchProfile, fetchEvent, changeName, changeEventType } from './store/main/actions'
import { GithubEventsType } from './api'
import configureStore from './store'

// check url param
export const checkParam = (store: ReturnType<typeof configureStore>) => {
  const url = new URL(window.location.href)
  const name = url.searchParams.get('name')
  const type = url.searchParams.get('type')
  let flag = false
  if (type && +type in GithubEventsType) {
    store.dispatch(changeEventType(+type))
    url.searchParams.delete('type')
    flag = true
  }

  if (name) {
    store.dispatch(changeName(name))
    store.dispatch(fetchEvent())
    store.dispatch(fetchProfile())
    url.searchParams.delete('name')
    flag = true
  }

  flag && window.history.pushState('', document.title, url.href)
}
