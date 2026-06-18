<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import database from '/src/data/database.json'
import lastLogin from '/src/data/last_login_details.json'
import fs from 'vite-plugin-fs/browser'

const router = useRouter()
let danger_panel = ref('')
const username_input = ref('')
const password_input = ref('')

onMounted(() => {
  if (danger_panel.value) {
    danger_panel.value.style.visibility = 'hidden'
  }
})

async function login() {
  for (const data of database) {
    if (data.username === username_input.value) {
      if (data.password === password_input.value) {
        try {
          lastLogin.admin = false
          lastLogin.account = data
          const updatedData = JSON.stringify(lastLogin)
          await fs.writeFile('src/data/last_login_details.json', updatedData)
          router.push('/dashboard')
        } catch (error) {
          console.error('Failed to write data:', error)
        }
      } else {
        danger_panel.value.style.visibility = 'visible'
      }
    } else {
      danger_panel.value.style.visibility = 'visible'
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="flex-column centered">
      <h1>login</h1>
      <input
        v-model="username_input"
        type="text"
        name="username"
        id="username"
        placeholder="username"
        required
      />
      <input
        v-model="password_input"
        type="password"
        name="password"
        id="password"
        placeholder="password"
        required
      />
      <button class="btn" @click="login">Sign in</button>
    </div>
  </div>
  <div ref="danger_panel" class="danger message-panel">
    <h3>You have entered wrong credentials</h3>
  </div>
</template>

<style scoped>
input {
  width: 250px;
  height: 30px;
  margin: 10px 0;
}
</style>
