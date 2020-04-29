export type Owner = {
  id: string
  avatar_url: string
}

export type Repository = {
  id: string
  name: string
  full_name: string
  owner: Owner
  html_url: string
  description: string
  stargazers_count: string
  watchers_count: string
}
