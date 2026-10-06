import type { User } from '../types/user'

const API_URL = "https://api-userapi.onrender.com/api/users/getUsers"

// Översätter en HTTP-statuskod till ett meddelande som användaren förstår
const getErrorMessage = (status: number): string => {
  if (status === 401 || status === 403) return "Appen har inte behörighet att hämta användarna. API-nyckeln saknas eller är fel."
  if (status === 404) return "Användarna kunde inte hittas på servern."
  if (status === 429) return "Dagens gräns för antal hämtningar är nådd. Försök igen i morgon."
  if (status >= 500) return "Servern har problem just nu. Försök igen om en stund."
  return "Något gick fel när användarna skulle hämtas. Försök igen."
}

export const getUsers = async (): Promise<User[]> => {
  if (import.meta.env.DEV) console.count("API-anrop")

  let res: Response
  try {
    res = await fetch(API_URL, {
      headers: { "x-api-key": import.meta.env.VITE_API_KEY },
    })
  } catch (error) {
    // fetch kastar bara ett fel när servern inte gick att nå alls
    throw new Error("Det gick inte att nå servern. Kontrollera din internetanslutning och försök igen.", { cause: error })
  }

  if (!res.ok) throw new Error(getErrorMessage(res.status))
  return res.json()
}