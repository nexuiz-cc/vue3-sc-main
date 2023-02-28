<template>
  <div class="icon">
    <van-icon name="bars" color="#1989fa" size="25" @click="showPopup" />
    <h4 class="info">Table {{ tableNumber }} ,{{ amount }} People</h4>
  </div>

  <van-search v-model="search" placeholder="Search the food whatever you want." input-align="center" left-icon="none"
    right-icon="search" autocomplete="on" class="search" @search="onSearch" />
  <van-popup v-model:show="show" position="left" :style="{ width: '30%', height: '100%' }">
    <van-button square size="large" type="primary" color="#b7b7b8" class="btn">Seafood</van-button>
    <van-button square size="large" type="primary" color="#b7b7b8" class="btn">Steak</van-button>
    <van-button square size="large" type="primary" color="#b7b7b8" class="btn">Cafe</van-button>
    <van-button square size="large" type="primary" color="#b7b7b8" class="btn">Pasta</van-button>
    <van-button square size="large" type="primary" color="#b7b7b8" class="btn">Sushi</van-button>
  </van-popup>

  <ul class="scroll">
    <li v-for="(menu, index) in menues" class="Menu" :key="index">
      <div class="Menu_imagearea">
        <img :src="menu.image" class="Menu_image" />
      </div>
      <div class="Menu_detail">
        <h4 class="Menu_name">{{ menu.name }}</h4>
        <p class="Menu_description">{{ menu.description }}</p>
        <p class="Menu_price">¥{{ menu.price }}</p>
        <div class="Menu_orderbox">
          <p class="Menu_count" id="Menu_count">X {{ menu.count }}</p>
          <div class="Menu_">
            <button class="Menu_button-minus" @click="minus(index)" id="btn1">-</button>
            <button class="Menu_button-plus" @click="plus(index)" id="btn2">+</button>
          </div>
        </div>
      </div>
    </li>
  </ul>

  <div>
    <button class="btnadd">Add to cart</button>
  </div>

  <TabBar></TabBar>
</template>

<script setup>
import axios from 'axios'
import TabBar from '../components/TabBar.vue'
import { ref, onMounted } from 'vue'
const tableNumber = 54
let show = ref(false)
const showPopup = () => {
  show.value = true
}
const amount = 4;
const plus = (index) => {
  const num = document.getElementsByClassName('Menu_count');
  num[index].style.visibility = 'visible';
  menues.value[index].count += 1;
}




const minus = (index) => {
  if (menues.value[index].count > 0) {
    menues.value[index].count -= 1;
  }

  if (menues.value[index].count == 0) {
    const num = document.getElementsByClassName('Menu_count');
    num[index].style.visibility = 'hidden';
  }
}

const menues = ref([]);

onMounted(async () => {
  const result = await axios.get('http://localhost:5000/product')
  menues.value.push(...result.data)
})
console.log('count:', menues);
const search = ref('').value;

console.log(menues);
const onSearch = (search) => {

}

let searchInArray = (searchQuery, array, objectKey = null) => {
  return array.filter(d => {
    let data = objectKey ? d[objectKey] : d //Incase If It's Array Of Objects.
    let dataWords = typeof data == "string" && data?.split(" ")?.map(b => b && b.toLowerCase().trim()).filter(b => b)
    let searchWords = typeof searchQuery == "string" && searchQuery?.split(" ").map(b => b && b.toLowerCase().trim()).filter(b => b)
    let matchingWords = searchWords.filter(word => dataWords.includes(word))
    return matchingWords.length

  })
}
console.log("search:", search);


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
<style scoped>
.scroll {
  overflow: scroll;
  height: 8rem;
}

.Menu {
  display: flex;
}

.Menu_image {
  width: 2rem;
  height: 2rem;
}

.Menu_name {
  font-size: 0.25rem;
  margin-top: 0.05rem;
}

.Menu_detail {
  margin-left: 0.3rem;
  font-size: 0.1rem;
}

.Menu_description {
  margin-top: 0.05rem;
  padding-top: 0.03rem;
  margin-left: 0.2rem;
}

.Menu_price {
  margin-top: 0.15rem;
  font-size: 0.28rem;
  font-weight: bold;
}

.Menu_orderbox {
  margin-top: 0.3rem;
}

.Menu_count {
  visibility: hidden;
  margin-left: 1.1rem;
  margin-top: -0.58rem;
  font-size: 0.22rem;
}

.Menu_ {
  margin-top: 0.3rem;
}
</style>