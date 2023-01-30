<template>
  <div class="icon">
      <van-icon name="bars" color="#1989fa" size="25" @click="showPopup" />
      <h4 class="info">Tabele {{ tableNumber }} ,{{ amount }} People</h4>
  </div>
   
  <van-search
    v-model="value"
    placeholder="Search the food whatever you want."
    input-align="center"
    left-icon="none"
    right-icon="search"
    autocomplete="on"
    class="search"
  />
  <van-popup v-model:show="show" position="left" :style="{ width: '30%', height: '100%' }">
    <van-button  square size="large"  type="primary" color="#b7b7b8" class="btn">Seafood</van-button>
    <van-button  square size="large"  type="primary" color="#b7b7b8" class="btn">Steak</van-button>
    <van-button  square size="large"  type="primary" color="#b7b7b8" class="btn">Café</van-button>
    <van-button  square size="large"  type="primary" color="#b7b7b8" class="btn">Pasta</van-button>
    <van-button  square size="large"  type="primary" color="#b7b7b8" class="btn">Sushi</van-button>
  </van-popup>

  <TabBar></TabBar>
</template>

<script setup>
import TabBar from '../components/TabBar.vue'
import { ref } from 'vue'
import { store } from '../plugins/store'
const tableNumber = store.tableNumber
const amount = store.amount
const show = ref(false)
const showPopup = () => {
  show.value = true
}
</script>

<style scoped>
.search {
  margin-top: 0.3rem;
}

* {
  --van-search-input-height: 50px;
  --van-button-default-color:black;
}

.icon{
  display: inline-flex;
  margin-top: 0.3rem;
  margin-left: 0.3rem;
}

.info{
  font-size: 0.3rem;
  color: #096bec;
  margin-left: 0.3rem;
  margin-top: 0.05rem;
}

.van-button--primary{
  color: black !important;
  size: 0.8rem;
  font-weight: bolder;
  font-family: 'Consolas', Courier, monospace!important;
  }
</style>
