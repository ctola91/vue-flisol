<script setup lang="ts">
import { onMounted } from 'vue'
import useUsers from '../composables/useUsers'

const { quantity, users, getUsers } = useUsers()

onMounted(async () => {
  getUsers()
})
</script>
<template>
  <div>
    <h1>Users</h1>
    <div>Number of Users: <input v-model="quantity" @keyup.enter="getUsers" /></div>
    <div>
      <div v-for="user in users" :key="user.id.value">
        <img :src="user.picture.thumbnail" :alt="user.name.first" />
        {{ user.name.first }} {{ user.name.last }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
