<template>
  <div>
    <div class="sc-title">
      <h3>Shopping Cart</h3>
    </div>
    <div class="sc-content">
      <div></div>
    </div>
  </div>
  <TabBar></TabBar>
  
  <table width="500">
    <tr>
      <td width="200">商品名</td>
      <td width="50">数量</td>
      <td width="250">値段</td>
    </tr>
    <tr v-for="item in store.seafoodList">
    <td width="200">{{ item.name }}</td>
    <td width="50">{{ item.amount }}</td>
    <td width="250">{{ item.price }}</td>
   </tr>
   <tr>
    <td width="100" class="animate__animated animate__flipInX lasttd">合計:{{ totalPrice }}円</td>
   </tr>
  </table>

</template>

<script setup>
import TabBar from '../components/TabBar.vue'
import { ref } from 'vue';
import 'animate.css';
import { store } from '../stores/store'

let totalPrice = ref(0)
for (let i = 0; i < store.seafoodList.length; i++) {
  totalPrice.value += store.seafoodList[i].price
}
</script>

<style scoped>
.lasttd{
  position: relative;
  left: 210px;
  top:10px;
}
</style>
