import { Link, useParams } from 'react-router-dom'
import { useUser } from '../hooks/useUsers'

const UserDetailPage = () => {
  const { id } = useParams()
  const { data: user, isLoading, isError, error } = useUser(Number(id))

  if (isLoading) return <p>Laddar användare…</p>
  if (isError) return <p>Fel: {error.message}</p>

  if (!user) {
    return (
      <section>
        <h1>Användaren finns inte</h1>
        <Link to="/users">Tillbaka till listan</Link>
      </section>
    )
  }

  return (
    <section>
      <Link to="/users">← Tillbaka</Link>
      <h1>{user.profile.name}</h1>
      <p>@{user.username}</p>

      <h2>Kontakt</h2>
      <p>{user.profile.email}</p>
      <p>
        {user.profile.address.street}, {user.profile.address.zipCode} {user.profile.address.city}
      </p>

      <h2>Roller</h2>
      <ul>
        {user.roles.map((role) => (
          <li key={role}>{role}</li>
        ))}
      </ul>

      <h2>Inställningar</h2>
      <p>Tema: {user.settings.theme === "dark" ? "Mörkt" : "Ljust"}</p>
      <p>E-postnotiser: {user.settings.notifications.email ? "På" : "Av"}</p>
      <p>Pushnotiser: {user.settings.notifications.push ? "På" : "Av"}</p>
    </section>
  )
}

export default UserDetailPage