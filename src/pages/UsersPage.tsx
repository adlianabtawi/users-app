import { Link } from 'react-router-dom'
import { useUsers } from '../hooks/useUsers'

const UsersPage = () => {
  const { data: users, isLoading, isError, error } = useUsers()

  if (isLoading) return <p>Laddar användare…</p>
  if (isError) return <p>Fel: {error.message}</p>

  return (
    <section>
      <h1>Användare</h1>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            <Link to={"/users/" + user.id}>{user.profile.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default UsersPage