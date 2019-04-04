/* eslint-disable no-console */

export default ({ author, homepage }: { author: string; homepage: string }) => {
  const say = (...msg: string[]) => console.log(`[info] ${author} >>`, ...msg)
  console.group('==========================================')
  say('Hello buddy!')
  say('You seem to be interested in this project.')
  say('This is an open source project.')
  say('You can find its source code here.👉', homepage)
  say('Goodbye!😀')
  console.log('==========================================')
  console.groupEnd()
}
