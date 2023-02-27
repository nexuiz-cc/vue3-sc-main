<template>
  <div class="icon">
    <van-icon name="bars" color="#1989fa" size="25" @click="showPopup" />
    <h4 class="info">Table {{ tableNumber }} ,{{ amount }} People</h4>
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
    <van-button square size="large" type="primary" color="#b7b7b8" class="btn">Seafood</van-button>
    <van-button square size="large" type="primary" color="#b7b7b8" class="btn">Steak</van-button>
    <van-button square size="large" type="primary" color="#b7b7b8" class="btn">Café</van-button>
    <van-button square size="large" type="primary" color="#b7b7b8" class="btn">Pasta</van-button>
    <van-button square size="large" type="primary" color="#b7b7b8" class="btn">Sushi</van-button>
  </van-popup>

  <div>
    <div class="d1">
      <img src="../assets/image/sea1.jpg" width="100" height="100" class="img1" />
      <h4 id="h4">{{menuStore.$state.resdata.seafood.itemlist[0].foodname}}</h4>
    </div>
    <div class="d2">
      <div>asdasd</div>
    </div>
    <div class="d3">
      <p class="d3p1">¥{{menuStore.$state.resdata.seafood.itemlist[0].price }}</p>
      <p class="d3p2">X {{ menuStore.$state.resdata.seafood.itemlist[0].count }}</p>
      <div class="d3p3">
        <button @click="minus(1)" class="btn2" id="btn1">-</button>
        <button @click="plus(1)" class="btn2" id="btn2">+</button>
      </div>
    </div>
  </div>

  <div>
    <div class="d1">
      <img src="../assets/image/sea2.jpg" width="100" height="100" class="img1" />
      <h4 id="h4">{{ menuStore.$state.resdata.seafood.itemlist[1].foodname }}</h4>
    </div>
    <div class="d2">
      <p>Fugu served as sashimi.</p>
    </div>
    <div class="d3">
      <p class="d3p1">¥{{ menuStore.$state.resdata.seafood.itemlist[1].price }}</p>
      <p class="d3p2">X {{ menuStore.$state.resdata.seafood.itemlist[1].count }}</p>
      <div class="d3p3">
        <button @click="minus(2)" class="btn2" id="btn1">-</button>
        <button @click="plus(2)" class="btn2" id="btn2">+</button>
      </div>
    </div>
  </div>

  <div>
    <div class="d1">
      <img src="../assets/image/sea3.jpg" width="100" height="100" class="img1" />
      <h4 id="h4">{{ menuStore.$state.resdata.seafood.itemlist[2].foodname }}</h4>
    </div>
    <div class="d2">
      <p>It has a sweet flavor.</p>
    </div>
    <div class="d3">
      <p class="d3p1">¥{{ menuStore.$state.resdata.seafood.itemlist[2].price }}</p>
      <p  class="d3p2">X {{  menuStore.$state.resdata.seafood.itemlist[2].count}}</p>
      <div class="d3p3">
        <button @click="minus(3)" class="btn2" id="btn1">-</button>
        <button @click="plus(3)" class="btn2" id="btn2">+</button>
      </div>
    </div>
  </div>

  <div>
    <div class="d1">
      <img src="../assets/image/sea4.jpg" width="100" height="100" class="img1" />
      <h4 id="h4">{{ menuStore.$state.resdata.seafood.itemlist[3].foodname }}</h4>
    </div>
    <div class="d2">
      <p>Grilled prawn with salt.</p>
    </div>
    <div class="d3">
      <p class="d3p1">¥{{ menuStore.$state.resdata.seafood.itemlist[2].price }}</p>
      <p class="d3p2">X {{ menuStore.$state.resdata.seafood.itemlist[2].count }}</p>
      <div class="d3p3">
        <button @click="minus(4)" class="btn2" id="btn1">-</button>
        <button @click="plus(4)" class="btn2" id="btn2">+</button>
      </div>
    </div>
  </div>

  <div>
    <button class="btnadd">Add to cart</button>
  </div>

  <TabBar></TabBar>
</template>

<script setup>
import axios from 'axios';
import TabBar from '../components/TabBar.vue'
import { ref,onMounted } from 'vue'
import { useMenuStore } from '../stores/menu'
const menuStore = useMenuStore();


const tableNumber = menuStore.$state.tableNumber;
let show = ref(false)
const showPopup = () => {
  show.value = true
}

onMounted(()=>{
  axios.get('http://localhost:5000/product/menu')
  .then(function(response){
    menuStore.$state.resdata = response.data;
  }) .catch(function (error) {
    console.log(error);
  })

})


  

// const plus = (param) => {
//   if (param == 1) {
//     store.num1 += 1
//   }
//   if (param == 2) {
//     store.num2 += 1
//   }
//   if (param == 3) {
//     store.num3 += 1
//   }
//   if (param == 4) {
//     store.num4 += 1
//   }
// }
// const minus = (param) => {
//   if (param == 1) {
//     store.num1 -= 1
//     if (store.num1 < 0) {
//       store.num1 = 0
//     }
//   }
//   if (param == 2) {
//     store.num2 -= 1
//     if (store.num2 < 0) {
//       store.num2 = 0
//     }
//   }
//   if (param == 3) {
//     store.num3 -= 1
//     if (store.num3 < 0) {
//       store.num3 = 0
//     }
//   }
//   if (param == 4) {
//     store.num4 -= 1
//     if (store.num4 < 0) {
//       store.num4 = 0
//     }
//   }
// }
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
  display: flex;
  font-family: 'Calling Code', Courier, monospace;
  font-size: 0.3rem;
  font-weight: bolder;
  margin-top: 2%;
  margin-left: 2%;
}

.d2 {
  font-family: 'Calling Code', Courier, monospace;
  margin-left: 2.1rem;
  margin-top: -1.4rem;
  font-size: 0.25rem;
}

#h4 {
  margin-left: 0.1rem;
  margin-top: 0.03rem;
}

.d3p1 {
  margin-left: 2rem;
  font-size: 0.35rem;
  font-family: 'Calling Code', Courier, monospace;
  margin-top: 0.01rem;
}

.d3p3 {
  display: inline-flex;
  font-size: 0.35rem;
  font-family: 'Calling Code', Courier, monospace;
  margin-left: 1.9rem;
  margin-top: 0.1rem;
}

.d3p2 {
  font-size: 0.3rem;
  font-family: 'Calling Code', Courier, monospace;
  margin-left: 4.2rem;
  margin-top: -0.36rem;
}
.btn2 {
  margin-left: 0.1rem;
}

.img1 {
  margin-top: 0.1rem;
}

#btn1 {
  width: 0.8rem;
  height: 0.5rem;
  border: white;
  color: aliceblue;
  background-color: #096bec;
}

#btn2 {
  width: 0.8rem;
  height: 0.5rem;
  border: white;
  color: aliceblue;
  background-color: #ec5c09;
  margin-left: 0.2rem;
}

#btn3 {
  width: 150px;
  padding-bottom: 3px;
  border: white;
  color: aliceblue;
  background-color: #ec09bb;
}

.btnadd {
  width: 6rem;
  height: 0.8rem;
  border: white;
  color: aliceblue;
  font-size: 0.3rem;
  font-family: 'Calling Code', Courier, monospace;
  background-color: #0ca33e;
  margin-top: 0.5rem;
  margin-left: 0.2rem;
}
</style>
