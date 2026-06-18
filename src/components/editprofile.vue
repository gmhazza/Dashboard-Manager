<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import lastLogin from '/src/data/last_login_details.json'
import database from '/src/data/database.json'
import userSample from '/src/data/user_sample.json'
import fs from 'vite-plugin-fs/browser'

const router = useRouter()

const name_input = ref('')
const username_input = ref('')
const password_input = ref('')
const age_input = ref('')
const link_input = ref('')
const email_input = ref('')
const dob_input = ref('')
const gender_input = ref('')
const nationality_input = ref('')

onMounted(() => {
  name_input.value = lastLogin.account.name
  username_input.value = lastLogin.account.username
  password_input.value = lastLogin.account.password
  age_input.value = lastLogin.account.age
  link_input.value = lastLogin.account.link
  email_input.value = lastLogin.account.email
  dob_input.value = lastLogin.account.dob
  gender_input.value = lastLogin.account.gender
  nationality_input.value = lastLogin.account.nationality
})

async function confirmEdit() {
  let newUser = userSample

  const index = database.findIndex((item) => item.username == lastLogin.account.username)

  if (index != -1) {
    database.splice(index, 1)
  }

  newUser.name = name_input.value
  newUser.username = username_input.value
  newUser.password = password_input.value
  newUser.age = parseInt(age_input.value)
  newUser.link = link_input.value
  newUser.email = email_input.value
  newUser.dob = dob_input.value
  newUser.gender = gender_input.value
  newUser.nationality = nationality_input.value
  database.push(newUser)
  try {
    const updatedData = JSON.stringify(database)
    await fs.writeFile('src/data/database.json', updatedData)
  } catch (error) {
    console.error('Failed to register data:', error)
  }
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
      }
    }
  }
}
</script>

<template>
  <div class="container">
    <h1>Edit Your Profile</h1>
    <label for="name"
      >Name: <input v-model="name_input" type="text" name="name" placeholder=""
    /></label>
    <label for="username"
      >Username: <input v-model="username_input" type="text" name="name" placeholder=""
    /></label>
    <label for="password"
      >Password: <input v-model="password_input" type="password" name="password" placeholder=""
    /></label>
    <label for="age"
      >Age: <input v-model="age_input" type="number" name="age" placeholder=""
    /></label>
    <label for="gender"
      >Gender:
      <input v-model="gender_input" type="text" name="gender" list="genders" placeholder="" />
      <datalist id="genders">
        <option value="Male"></option>
        <option value="Female"></option></datalist
    ></label>
    <label for="nationality"
      >Nationality:
      <input
        v-model="nationality_input"
        type="text"
        name="nationality"
        list="countries"
        placeholder="" />
      <datalist id="countries">
        <option value="Afghanistan"></option>
        <option value="Albania"></option>
        <option value="Algeria"></option>
        <option value="Andorra"></option>
        <option value="Angola"></option>
        <option value="Antigua and Barbuda"></option>
        <option value="Argentina"></option>
        <option value="Armenia"></option>
        <option value="Australia"></option>
        <option value="Austria"></option>
        <option value="Azerbaijan"></option>
        <option value="Bahamas"></option>
        <option value="Bahrain"></option>
        <option value="Bangladesh"></option>
        <option value="Barbados"></option>
        <option value="Belarus"></option>
        <option value="Belgium"></option>
        <option value="Belize"></option>
        <option value="Benin"></option>
        <option value="Bhutan"></option>
        <option value="Bolivia"></option>
        <option value="Bosnia and Herzegovina"></option>
        <option value="Botswana"></option>
        <option value="Brazil"></option>
        <option value="Brunei"></option>
        <option value="Bulgaria"></option>
        <option value="Burkina Faso"></option>
        <option value="Burundi"></option>
        <option value="Cambodia"></option>
        <option value="Cameroon"></option>
        <option value="Canada"></option>
        <option value="Cape Verde"></option>
        <option value="Central African Republic"></option>
        <option value="Chad"></option>
        <option value="Chile"></option>
        <option value="China"></option>
        <option value="Colombia"></option>
        <option value="Comoros"></option>
        <option value="Congo"></option>
        <option value="Costa Rica"></option>
        <option value="Croatia"></option>
        <option value="Cuba"></option>
        <option value="Cyprus"></option>
        <option value="Czech Republic"></option>
        <option value="Denmark"></option>
        <option value="Djibouti"></option>
        <option value="Dominica"></option>
        <option value="Dominican Republic"></option>
        <option value="East Timor"></option>
        <option value="Ecuador"></option>
        <option value="Egypt"></option>
        <option value="El Salvador"></option>
        <option value="Equatorial Guinea"></option>
        <option value="Eritrea"></option>
        <option value="Estonia"></option>
        <option value="Eswatini"></option>
        <option value="Ethiopia"></option>
        <option value="Fiji"></option>
        <option value="Finland"></option>
        <option value="France"></option>
        <option value="Gabon"></option>
        <option value="Gambia"></option>
        <option value="Georgia"></option>
        <option value="Germany"></option>
        <option value="Ghana"></option>
        <option value="Greece"></option>
        <option value="Grenada"></option>
        <option value="Guatemala"></option>
        <option value="Guinea"></option>
        <option value="Guinea-Bissau"></option>
        <option value="Guyana"></option>
        <option value="Haiti"></option>
        <option value="Honduras"></option>
        <option value="Hungary"></option>
        <option value="Iceland"></option>
        <option value="India"></option>
        <option value="Indonesia"></option>
        <option value="Iran"></option>
        <option value="Iraq"></option>
        <option value="Ireland"></option>
        <option value="Israel"></option>
        <option value="Italy"></option>
        <option value="Ivory Coast"></option>
        <option value="Jamaica"></option>
        <option value="Japan"></option>
        <option value="Jordan"></option>
        <option value="Kazakhstan"></option>
        <option value="Kenya"></option>
        <option value="Kiribati"></option>
        <option value="Kuwait"></option>
        <option value="Kyrgyzstan"></option>
        <option value="Laos"></option>
        <option value="Latvia"></option>
        <option value="Lebanon"></option>
        <option value="Lesotho"></option>
        <option value="Liberia"></option>
        <option value="Libya"></option>
        <option value="Liechtenstein"></option>
        <option value="Lithuania"></option>
        <option value="Luxembourg"></option>
        <option value="Madagascar"></option>
        <option value="Malawi"></option>
        <option value="Malaysia"></option>
        <option value="Maldives"></option>
        <option value="Mali"></option>
        <option value="Malta"></option>
        <option value="Marshall Islands"></option>
        <option value="Mauritania"></option>
        <option value="Mauritius"></option>
        <option value="Mexico"></option>
        <option value="Micronesia"></option>
        <option value="Moldova"></option>
        <option value="Monaco"></option>
        <option value="Mongolia"></option>
        <option value="Montenegro"></option>
        <option value="Morocco"></option>
        <option value="Mozambique"></option>
        <option value="Myanmar"></option>
        <option value="Namibia"></option>
        <option value="Nauru"></option>
        <option value="Nepal"></option>
        <option value="Netherlands"></option>
        <option value="New Zealand"></option>
        <option value="Nicaragua"></option>
        <option value="Niger"></option>
        <option value="Nigeria"></option>
        <option value="North Korea"></option>
        <option value="North Macedonia"></option>
        <option value="Norway"></option>
        <option value="Oman"></option>
        <option value="Pakistan"></option>
        <option value="Palau"></option>
        <option value="Palestine"></option>
        <option value="Panama"></option>
        <option value="Papua New Guinea"></option>
        <option value="Paraguay"></option>
        <option value="Peru"></option>
        <option value="Philippines"></option>
        <option value="Poland"></option>
        <option value="Portugal"></option>
        <option value="Qatar"></option>
        <option value="Romania"></option>
        <option value="Russia"></option>
        <option value="Rwanda"></option>
        <option value="Saint Kitts and Nevis"></option>
        <option value="Saint Lucia"></option>
        <option value="Saint Vincent and the Grenadines"></option>
        <option value="Samoa"></option>
        <option value="San Marino"></option>
        <option value="Sao Tome and Principe"></option>
        <option value="Saudi Arabia"></option>
        <option value="Senegal"></option>
        <option value="Serbia"></option>
        <option value="Seychelles"></option>
        <option value="Sierra Leone"></option>
        <option value="Singapore"></option>
        <option value="Slovakia"></option>
        <option value="Slovenia"></option>
        <option value="Solomon Islands"></option>
        <option value="Somalia"></option>
        <option value="South Africa"></option>
        <option value="South Korea"></option>
        <option value="South Sudan"></option>
        <option value="Spain"></option>
        <option value="Sri Lanka"></option>
        <option value="Sudan"></option>
        <option value="Suriname"></option>
        <option value="Sweden"></option>
        <option value="Switzerland"></option>
        <option value="Syria"></option>
        <option value="Taiwan"></option>
        <option value="Tajikistan"></option>
        <option value="Tanzania"></option>
        <option value="Thailand"></option>
        <option value="Togo"></option>
        <option value="Tonga"></option>
        <option value="Trinidad and Tobago"></option>
        <option value="Tunisia"></option>
        <option value="Turkey"></option>
        <option value="Turkmenistan"></option>
        <option value="Tuvalu"></option>
        <option value="Uganda"></option>
        <option value="Ukraine"></option>
        <option value="United Arab Emirates"></option>
        <option value="United Kingdom"></option>
        <option value="United States"></option>
        <option value="Uruguay"></option>
        <option value="Uzbekistan"></option>
        <option value="Vanuatu"></option>
        <option value="Vatican City"></option>
        <option value="Venezuela"></option>
        <option value="Vietnam"></option>
        <option value="Yemen"></option>
        <option value="Zambia"></option>
        <option value="Zimbabwe"></option></datalist
    ></label>
    <label for="dob"
      >Date of Birth: <input v-model="dob_input" type="date" name="dob" placeholder=""
    /></label>
    <label for="email"
      >Email: <input v-model="email_input" type="email" name="email" placeholder=""
    /></label>
    <label for="link"
      >Link: <input v-model="link_input" type="text" name="link" id="link" placeholder=""
    /></label>
    <button class="btn" @click="confirmEdit">Confirm Edit</button>
  </div>
</template>

<style scoped>
input {
  width: 250px;
  height: 30px;
  margin: 10px 0;
}
</style>
