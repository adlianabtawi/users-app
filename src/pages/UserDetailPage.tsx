import { Link, useParams } from 'react-router-dom'
import { useUser } from '../hooks/useUsers'
import RoleList from '../components/RoleList'
import StatusMessage from '../components/StatusMessage'

const UserDetailPage = () => {
  const { id } = useParams()
  const { data: user, isLoading, isError, error, refetch } = useUser(Number(id))

  if (isLoading) {
    return <StatusMessage variant="loading" message="Laddar användare…" />
  }

  if (isError) {
    return <StatusMessage variant="error" message={error.message} onRetry={() => refetch()} />
  }

  if (!user) {
    return (
      <section>
        <StatusMessage variant="empty" message="Användaren finns inte." />
        <Link to="/users">Tillbaka till listan</Link>
      </section>
    )
  }

  return (
    <section className="user-detail">
      <Link to="/users">← Tillbaka</Link>
      <h1>{user.profile.name}</h1>
      <p>@{user.username}</p>
      <RoleList roles={user.roles} />

      <h2>Kontakt</h2>
      <p>{user.profile.email}</p>
      <p>
        {user.profile.address.street}, {user.profile.address.zipCode} {user.profile.address.city}
      </p>

      <h2>Inställningar</h2>
      <p>Tema: {user.settings.theme === "dark" ? "Mörkt" : "Ljust"}</p>
      <p>E-postnotiser: {user.settings.notifications.email ? "På" : "Av"}</p>
      <p>Pushnotiser: {user.settings.notifications.push ? "På" : "Av"}</p>
    </section>
  )
}

export default UserDetailPage