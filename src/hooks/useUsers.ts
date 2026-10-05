import { useQuery } from '@tanstack/react-query'
import { getUsers } from '../api/users'

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  })
}

export const useUser = (id: number) => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    select: (users) => users.find((user) => user.id === id),
  })
}