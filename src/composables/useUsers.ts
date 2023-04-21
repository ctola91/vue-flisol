import type { User } from '@/interfaces/user'
import UserService from '@/services/UserService'
import { ref } from 'vue'

const users = ref<User[]>([])
const quantity = ref<number>(10)

const getUsers = async () => {
  users.value = await UserService.getUsers(quantity.value)
}

const useUsers = () => {
  return {
    quantity,
    users,
    getUsers
  }
}

export default useUsers
