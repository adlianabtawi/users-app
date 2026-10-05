import type { Role } from '../types/user'

interface RoleBadgeProps {
  role: Role
}

const RoleBadge = ({ role }: RoleBadgeProps) => {
  return <span className={"role-badge role-" + role}>{role}</span>
}

export default RoleBadge