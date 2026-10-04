import { useParams } from 'react-router-dom'

const UserDetailPage = () => {
  const { id } = useParams()

  return (
    <section>
      <h1>Användare {id}</h1>
    </section>
  )
}

export default UserDetailPage
