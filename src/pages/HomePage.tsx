import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <section>
      <h1>Users App</h1>
      <p>En app som visar användare från ett externt API.</p>
      <Link to="/users">Visa alla användare</Link>
    </section>
  )
}

export default HomePage
