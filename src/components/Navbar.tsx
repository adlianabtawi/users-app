import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Start</Link>
      <Link to="/users">Användare</Link>
    </nav>
  )
}

export default Navbar