import type { User } from './../interfaces/user'
import API from '@/api/api'

const getUsers = async (results: number = 10): Promise<User[]> => {
  const { data } = await API.get(`?results=${results}`)

  return data.results
}

export default {
  getUsers
}
