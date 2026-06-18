<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <h2>Dashboard</h2>
    <nav>
      <RouterLink to="/dashboard">Home</RouterLink>
      <RouterLink to="/logout">Logout</RouterLink>
    </nav>
  </main>
</template>

<style scoped>
main {
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: lightgray;
}
h2 {
  font-weight: bold;
}
nav a {
  position: relative;
  margin: 0 20px;
  padding: 10px;
  text-decoration: none;
  color: #000000;
  font-weight: 600;
  cursor: pointer;
  font-size: 1.25em;
  z-index: 1;
  transition: color 750ms ease;
}
nav a:hover {
  color: #ffffff;
}
nav a::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  height: 100%;
  width: 0%;
  background-color: #000000;
  border-radius: 8px;
  z-index: -1;
  transition: width 750ms ease;
}
nav a:hover::before {
  width: 100%;
}
</style>
