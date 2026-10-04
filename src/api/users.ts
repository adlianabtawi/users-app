import type { User } from '../types/user'

const API_URL = "https://api-userapi.onrender.com/api/users/getUsers"

export const getUsers = async (): Promise<User[]> => {
  if (import.meta.env.DEV) console.count("API-anrop")

  const res = await fetch(API_URL, {
    headers: { "x-api-key": import.meta.env.VITE_API_KEY },
  })
  if (!res.ok) throw new Error("Kunde inte hämta användare (HTTP " + res.status + ")")
  return res.json()
}