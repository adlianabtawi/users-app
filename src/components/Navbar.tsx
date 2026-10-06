import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" end>Start</NavLink>
      <NavLink to="/users">Användare</NavLink>
    </nav>
  )
}

export default Navbar