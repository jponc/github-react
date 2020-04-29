export type Owner = {
  id: string
  avatar_url: string
  login: string
}

export type Repository = {
  id: string
  name: string
  full_name: string
  owner: Owner
  description: string
  stargazers_count: number
  watchers_count: number
}
