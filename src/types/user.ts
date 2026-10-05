export interface Address {
  street: string
  city: string
  zipCode: string
}

export interface Profile {
  name: string
  email: string
  address: Address
}

export interface NotificationSettings {
  email: boolean
  push: boolean
}

export interface Settings {
  theme: "light" | "dark"
  notifications: NotificationSettings
}

export type Role = "user" | "admin" | "editor" | "support"

export interface User {
  id: number
  username: string
  profile: Profile
  settings: Settings
  roles: Role[]
}