<template>
  <div>
    <div class="sc-title">
      <h3>Shopping Cart</h3>
      <br>
    </div>
    <div class="sc-content">
      <div></div>
    </div>
  </div>
  <TabBar></TabBar>
  
  <table class="table">
    <tr>
      <td width="150">商品名</td>
      <td width="50">数量</td>
      <td width="100">値段</td>
      <td width="100">合計</td>
    </tr>
    <tr v-for="item in seafoodList">
    <td width="150">{{ item.name }}</td>
    <td width="50">{{ item.count }}</td>
    <td width="100">{{ item.price }}</td>
    <td width="100">{{ item.totalPrice }}</td>
   </tr>
   <tr v-if="seafoodList.length>0">
    <td width="100" class="animate__animated animate__flipInX lasttd">会計:{{totalPrice}}円</td>
   </tr>
  </table>

</template>

<script setup>
import TabBar from '../components/TabBar.vue'
import { ref ,onMounted} from 'vue';
import 'animate.css';
import { getShopingCart } from '../api/api';

const seafoodList = ref([]);
const totalPrice = ref(0);

onMounted(() => {
 getShopingCart('seafood').then((res)=>{
  seafoodList.value = res.data.itemlist;
  totalPrice.value = res.data.totalPrice;
  console.log(seafoodList.value);
 })
})



</script>

<style scoped>
.lasttd{
  position: relative;
  left: 220px;
  top:10px;
  font-size: 15px;
  font-family: 'Meiryo UI';
}
.table{
  position: relative;
  left: 20px;
  font-size: 15px;
  font-family: 'Meiryo UI';
}
</style>
