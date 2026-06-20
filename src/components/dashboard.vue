<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import lastLogin from '/src/data/last_login_details.json'
import database from '/src/data/database.json'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import fs from 'vite-plugin-fs/browser'

const router = useRouter()

const danger_panel = ref('')
const success_panel = ref('')

let data = ref(lastLogin)
let admin = ref(data.value.admin)
let undef = ref('Not Defined Yet')

onMounted(() => {
  danger_panel.value.style.visibility = 'hidden'
  success_panel.value.style.visibility = 'hidden'
})

function goToEditProfile() {
  router.push('edit-profile')
}

async function deleteAllData() {
  const arr = []
  const jsonArr = JSON.stringify(arr)
  try {
    await fs.writeFile('src/data/database.json', jsonArr)
    success_panel.value.style.visibility = 'visible'
    danger_panel.value.style.visibility = 'hidden'
  } catch (error) {
    if (success_panel.value.style.visibility !== 'visible') {
      danger_panel.value.style.visibility = 'visible'
    } else {
      success_panel.value.style.visibility = 'hidden'
      danger_panel.value.style.visibility = 'visible'
    }
  }
}
function deleteSpecificData() {
  router.push('/remove-specific-data')
}
function showAllData() {
  router.push('/show-all-data')
}
</script>

<template>
  <div class="con">
    <div v-if="!admin">
      <h1>Manage Your Dashboard</h1>
      <div class="flex-column">
        <div>
          <h2>Personal Information</h2>
          <hr />
          <button class="btn-edit" @click="goToEditProfile">>Edit</button>
        </div>
        <div v-for="(value, key) in lastLogin.account" :key="key">
          <strong>{{ key }}: </strong>{{ value }}
        </div>
      </div>
    </div>
    <div v-else>
      <h1>Hello, Admin!</h1>
      <hr />
      <button class="btn-edit" @click="showAllData">Show all Data</button>
      <br />
      <button class="btn-edit" @click="deleteAllData">Delete all Data</button>
      <br />
      <button class="btn-edit" @click="deleteSpecificData">Delete any Specific Data</button>
    </div>
  </div>
  <div ref="danger_panel" class="danger message-panel">
    <h3>Operation Unsuccessful</h3>
  </div>
  <div ref="success_panel" class="success message-panel">
    <h3>Operation Successful</h3>
  </div>
</template>

<style scoped>
.con {
  margin: 32px;
  padding: 32px;
  height: 80vh;
}
.con h1 {
  margin: 32px 0;
}
table {
  table-layout: fixed;
  width: 400px;
}
</style>
