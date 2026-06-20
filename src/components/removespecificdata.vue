<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'
import lastLogin from '/src/data/last_login_details.json'
import fourZeroThree from '/src/components/403page.vue'
import database from '/src/data/database.json'
import fs from 'vite-plugin-fs/browser'

const username_input = ref('')
const result = ref('')
const pre_tag = ref('Search the data')

function searchData() {
  if (username_input.value) {
    const arrJson = database
    console.log(arrJson)
    result.value = arrJson.find(item => item.username === username_input.value)
    if (result.value) {
      pre_tag.value = JSON.stringify(result.value, null, 2)
    }
  }
}
async function deleteData() {
  if (result.value) {
    try {
    let updatedData = database.filter(item => item.username !== result.value.username)
    const updatedDataJSON = JSON.stringify(updatedData)
    await fs.writeFile('src/data/database.json', updatedDataJSON)
  } catch (error) {
    console.error('Failed to register data:', error)
  }
  }
}
</script>

<template>
  <div class="container" v-if="lastLogin.admin">
      <label for="username">
        Username: <input type="text" v-model="username_input">
      </label>
      <br>
      <button class="btn-edit" @click="searchData">Search</button>
      <div class="display-data">
        <div v-for="(user, key) of result" :key="key">
          <strong>{{ key }}: </strong> {{ user }}
        </div>
      </div>
      <button class="btn-edit" @click="deleteData">Delete</button>
  </div>
  <div v-else>
    <fourZeroThree/>
  </div>
</template>

<style scoped>

</style>
