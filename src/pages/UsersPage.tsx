import { useUsers } from '../hooks/useUsers'
import UserCard from '../components/UserCard'
import StatusMessage from '../components/StatusMessage'

const UsersPage = () => {
  const { data: users, isLoading, isError, error, refetch } = useUsers()

  if (isLoading) {
    return <StatusMessage variant="loading" message="Laddar användare…" />
  }

  if (isError) {
    return <StatusMessage variant="error" message={error.message} onRetry={() => refetch()} />
  }

  if (!users || users.length === 0) {
    return <StatusMessage variant="empty" message="Det finns inga användare att visa." />
  }

  return (
    <section>
      <h1>Användare</h1>
      <div className="user-grid">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </section>
  )
}

export default UsersPage