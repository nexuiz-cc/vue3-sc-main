<template>
<h2 class="h2">Are you forgot your password?</h2>
<van-cell-group>
</van-cell-group>
<van-cell-group inset>
  <van-field 
    v-model="newPassword"
    placeholder="Set your new password."
    label-align="top"
    size="large"
    class="newPassword"
    type="password"
  />
  <van-button round block type="primary" class="btn" @click="onSubmit()">Submit</van-button>
</van-cell-group>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { store } from '../plugins/store.js'
const newPassword = ref('');
const router = useRouter()
const onSubmit=()=>{
  console.log('newpass:',newPassword);
  store.changePassword(newPassword);
  console.log('password:',store.password);
  router.push('./login');
}
</script>

<style scoped>
.h2{
    margin: 0.5rem 0.3rem 0.2rem 0.4rem;
}
.newPassword{
    background-color: rgb(230, 230, 230);
}

.btn{
    font-size: 0.25rem;
    margin-top: 0.3rem;
    margin-left: 1rem;
    width: 3.5rem;
}
</style>