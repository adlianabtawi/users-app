import { Link } from 'react-router-dom'
import type { User } from '../types/user'
import RoleList from './RoleList'

interface UserCardProps {
  user: User
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <article className="user-card">
      <h2>
        <Link to={"/users/" + user.id}>{user.profile.name}</Link>
      </h2>
      <p>@{user.username}</p>
      <p>{user.profile.address.city}</p>
      <RoleList roles={user.roles} />
    </article>
  )
}

export default UserCard