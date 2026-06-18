<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function switchToLogin() {
  router.push('/login')
}
function switchToRegister() {
  router.push('/registration')
}
function switchToAdmin() {
  router.push('/admin-login')
}
</script>

<template>
  <div class="container">
    <h1>No profile founded</h1>
    <button class="btn" @click="switchToLogin">Log in</button>
    <button class="btn" @click="switchToRegister">Register now</button>
    <button class="btn" @click="switchToAdmin">Admin</button>
  </div>
</template>

<style scoped></style>
