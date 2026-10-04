import { useUsers } from './hooks/useUsers'

const App = () => {
  const { data: users, isLoading, isError, error } = useUsers()

  if (isLoading) return <p>Laddar användare…</p>
  if (isError) return <p>Fel: {error.message}</p>

  return (
    <main>
      <h1>Users App</h1>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>{user.profile.name}</li>
        ))}
      </ul>
    </main>
  )
}

export default App