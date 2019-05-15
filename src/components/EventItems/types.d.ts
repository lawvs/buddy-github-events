export interface Commit {
  sha: string
  author: Author
  message: string
  distinct: boolean
  url: string
}

interface Author {
  email: string
  name: string
}
