<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import lastLogin from '/src/data/last_login_details.json'
import fourZeroThree from '/src/components/403page.vue'
import database from '/src/data/database.json'



</script>

<template>
  <div class="container" v-if="lastLogin.admin">
    <div class="display-data" v-for="(data, index) in database" :key="index">
      <strong>{{ index+1 }}</strong>
      <div v-for="(user, key) of data" :key="key">
        <strong>{{ key }}: </strong> {{ user }}
      </div>
    </div>

  </div>
  <div v-else>
    <fourZeroThree/>
  </div>
</template>

<style scoped>

</style>
