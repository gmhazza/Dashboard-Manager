<script setup>
import { RouterView, useRouter } from 'vue-router'
import lastLogin from '/src/data/last_login_details.json' with { type: 'json' }
import navbar from './components/navbar.vue'

const router = useRouter()

if (!lastLogin.account) {
  router.push('/identify')
}
</script>

<template>
  <div v-if="lastLogin.account">
    <navbar />
    <RouterView />
  </div>
  <div v-else>
    <RouterView />
  </div>
</template>

<style scoped></style>
