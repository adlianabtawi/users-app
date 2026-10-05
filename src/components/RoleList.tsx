import type { Role } from '../types/user'
import RoleBadge from './RoleBadge'

interface RoleListProps {
  roles: Role[]
}

const RoleList = ({ roles }: RoleListProps) => {
  // "user" är en grundroll som alla har. Den visas bara om användaren saknar andra roller.
  const extraRoles = roles.filter((role) => role !== "user")
  const visibleRoles = extraRoles.length > 0 ? extraRoles : roles

  return (
    <div className="roles">
      {visibleRoles.map((role) => (
        <RoleBadge key={role} role={role} />
      ))}
    </div>
  )
}

export default RoleList