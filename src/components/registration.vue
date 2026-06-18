<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'
import database from '/src/data/database.json'
import userSample from '/src/data/user_sample.json'
import fs from 'vite-plugin-fs/browser'

const name_input = ref('')
const username_input = ref('')
const password_input = ref('')
const age_input = ref('')
const link_input = ref('')

async function register() {
  let newUser = userSample
  newUser.name = name_input.value
  newUser.username = username_input.value
  newUser.password = password_input.value
  newUser.age = parseInt(age_input.value)
  newUser.link = link_input.value
  database.push(newUser)
  try {
    const updatedData = JSON.stringify(database)
    await fs.writeFile('src/data/database.json', updatedData)
  } catch (error) {
    console.error('Failed to register data:', error)
  }
}
</script>

<template>
  <div class="container">
    <form class="flex-column centered">
      <h1>Register</h1>
      <input v-model="name_input" type="text" name="name" placeholder="Full Name" required />
      <input v-model="username_input" type="text" name="username" placeholder="username" required />
      <input
        v-model="password_input"
        type="password"
        name="password"
        placeholder="password"
        required
      />
      <input v-model="age_input" type="number" name="age" id="age" placeholder="age" required />
      <input v-model="link_input" type="text" name="link" id="link" placeholder="link" required />
      <button class="btn" @click="register">Create an Account</button>
    </form>
  </div>
</template>

<style scoped>
input {
  width: 250px;
  height: 30px;
  margin: 10px 0;
}
</style>
