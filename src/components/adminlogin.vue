<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import adminCredit from '/src/data/admin_credits.json'
import lastLogin from '/src/data/last_login_details.json'
import fs from 'vite-plugin-fs/browser'

const router = useRouter()

let danger_panel = ref('')
const password_input = ref('')

onMounted(() => {
  if (danger_panel.value) {
    danger_panel.value.style.visibility = 'hidden'
  }
})

async function EnterAsAdmin() {
  if (password_input.value === adminCredit.password) {
    lastLogin.admin = true
    lastLogin.account = adminCredit
    const updatedData = JSON.stringify(lastLogin)
    try {
      await fs.writeFile('src/data/last_login_details.json', updatedData)
      router.push('/dashboard')
    } catch (error) {
      console.error('Failed to Enter as admin:', error)
    }
  } else {
    danger_panel.value.style.visibility = 'visible'
  }
}
</script>

<template>
  <div class="container">
    <div class="flex-column centered">
      <h1>Enter as Admin</h1>
      <input
        v-model="password_input"
        type="password"
        name="password"
        placeholder="password"
        required
      />
      <button class="btn" @click="EnterAsAdmin">Enter</button>
    </div>
  </div>
  <div ref="danger_panel" class="danger error-panel">
    <h3>You have entered wrong credentials</h3>
  </div>
</template>

<style scoped>
input {
  width: 250px;
  height: 30px;
  margin: 10px 0;
}
.error-panel {
  position: absolute;
  right: 20px;
  padding: 10px;
}
</style>
