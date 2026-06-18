<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import lastLogin from '/src/data/last_login_details.json' with { type: 'json' }
import fs from 'vite-plugin-fs/browser'
import { useRouter } from 'vue-router'

let router = useRouter()

async function logout() {
  try {
    let data = lastLogin
    data.account = null
    const fileContent = JSON.stringify(data)
    await fs.writeFile('src/data/last_login_details.json', fileContent)
    router.push('/identify')
  } catch (error) {
    console.error('Failed to erase data:', error)
  }
}

function goBackward() {
  router.push('/dashboard')
}
</script>

<template>
  <div class="container">
    <h1>{{ lastLogin.account.name }}, Are you really Sure?</h1>

    <button class="btn" @click="logout">Yes</button>
    <button class="btn" @click="goBackward">No</button>
  </div>
</template>
