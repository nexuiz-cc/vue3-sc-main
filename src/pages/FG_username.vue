<template>
  <h2 class="h2">Are You Forgot Your Username?</h2>
  <van-cell-group inset>
    <van-field
      v-model="newUsername"
      placeholder="Set your new username."
      label-align="top"
      size="large"
      class="newUsername"
      type="text"
    />
  </van-cell-group>
  <button class="button" @click="onSubmit()">Confirm</button>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// eslint-disable-next-line import/extensions
import { store } from '../stores/store.js';

const newUsername = ref('');
const router = useRouter();
const onSubmit = () => {
  console.log('newUsername:', newUsername.value);
  store.username = newUsername.value;
  console.log('username:', store.username);
  router.push('./login');
};
</script>

<style scoped>
.h2 {
  margin: 0.5rem 0.3rem 0.2rem 0.4rem;
  padding-top: 0.1rem;
}
.newUsername {
  background-color: rgb(230, 230, 230);
  margin-top: 0.1rem;
}

.button {
  font-weight: 0;
  font-size: 20px;
  width: 160px;
  color: #fff;
  background-color: #0066cc;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  padding: 10px 45px;
  border: 2px solid #0066cc;
  box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
  border-radius: 50px;
  transition: 1000ms;
  transform: translateY(0);
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  margin-left: 100px;
  margin-top: 10px;
}
.button:hover {
  transition: 800ms;
  padding: 10px 50px;
  transform: translateY(-0px);
  background-color: #fff;
  color: #0066cc;
  border: solid 2px #0066cc;
}
</style>
