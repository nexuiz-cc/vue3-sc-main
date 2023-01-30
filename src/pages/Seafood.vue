<template>
  <div class="icon">
    <van-icon name="bars" color="#1989fa" size="25" @click="showPopup" />
    <h4 class="info">Tabele {{ tableNumber }} ,{{ amount }} People</h4>
  </div>

  <van-search v-model="value" placeholder="Search the food whatever you want." input-align="center" left-icon="none"
    right-icon="search" autocomplete="on" class="search" />
  <van-popup v-model:show="show" position="left" :style="{ width: '30%', height: '100%' }">
    <van-button square size="large" type="primary" color="#b7b7b8" class="btn">Seafood</van-button>
    <van-button square size="large" type="primary" color="#b7b7b8" class="btn">Steak</van-button>
    <van-button square size="large" type="primary" color="#b7b7b8" class="btn">Café</van-button>
    <van-button square size="large" type="primary" color="#b7b7b8" class="btn">Pasta</van-button>
    <van-button square size="large" type="primary" color="#b7b7b8" class="btn">Sushi</van-button>
  </van-popup>

  <div>
    <div class="d1">
      <img src="../assets/image/sea1.jpg" width="100" height="100" />
      <h4 id="h4">Grilled RockFish</h4>
    </div>
    <div class="d2">
      <p>Grilled rockfish with salt.</p>
    </div >
    <div class='d3'>
      <p class="d3p1">¥{{ store.price1 }}</p>
      <p v-show="store.num1!==0">X {{  store.num1}}</p>
      <div class="d3p2">
        <button>-</button>
        <button @click="plus(1)">+</button>
        <button>add cart</button>
      </div>
    </div>
  </div>

  <TabBar></TabBar>
</template>

<script setup>

import TabBar from '../components/TabBar.vue'
import { ref } from 'vue'
import { store } from '../plugins/store'
const tableNumber = store.tableNumber
const amount = store.amount
let show = ref(false);
const showPopup = () => {
  show.value = true
}

const plus = (param) => {
  if(param==1){
    store.num1+=1;
  }

}






</script>

<style scoped>
.search {
  margin-top: 0.3rem;
}

* {
  --van-search-input-height: 50px;
  --van-button-default-color: black;
}

.icon {
  display: inline-flex;
  margin-top: 0.3rem;
  margin-left: 0.3rem;
}

.info {
  font-size: 0.3rem;
  color: #096bec;
  margin-left: 0.3rem;
  margin-top: 0.05rem;
}

.van-button--primary {
  color: black !important;
  size: 0.8rem;
  font-weight: bolder;
  font-family: 'Consolas', Courier, monospace !important;
}

.d1 {
  display: inline-flex;
  font-family: 'Consolas', Courier, monospace;
  font-size: 0.3rem;
  font-weight: bolder;
  margin-top: 0.2rem;
}

.d2 {
  font-family: 'Consolas', Courier, monospace;
  margin-left: 1.8rem;
  margin-top: -1.3rem;
  font-size: 0.25rem;
}

#h4 {
  margin-left: 0.1rem;
}

.d3p1{
  margin-left:1.8rem;
  margin-top: 0.1rem;
  font-size: 0.35rem;
  font-family: 'Consolas', Courier, monospace;
}

.d3p2{
  display: inline-flex;
  font-size: 0.35rem;
  font-family: 'Consolas', Courier, monospace;
  margin-left:1.8rem;
}
</style>
