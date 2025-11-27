<template>
  <q-page padding>
    <!-- content -->
    <h2>Provjera ishoda 2</h2>
    <q-card>
      <q-card-section>
        <q-input v-model="ime" label="Unesi ime" />
      </q-card-section>
      <q-btn @click="posalji()">Pošalji</q-btn>
      <!--q-card-section>
        {{ ispis }}
      </q-card-section-->
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

  const ime = ref('')
  //let ispis = ref('')

  async function posalji() {
    let data = {'ime': ime.value }
    await axios.post('http://localhost:3000/api/ime', data)
    .then(result => {
      console.log(result.data);
    })
    .catch(error => {
      console.log(error);
    });
  }
</script>
