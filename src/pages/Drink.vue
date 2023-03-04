<template>
    <div class="inline">
    <div class="bars">
      <van-icon name="bars" color="#1989fa" size="25" @click="showPopup" />
    </div>
    <TableInfo></TableInfo>
  </div>

  <van-popup v-model:show="show" position="left" :style="{ width: '30%', height: '100%' }">
    <van-button size="large" type="primary" class="btn" @click="locate('#/menu')">Seafood</van-button>
    <van-button  size="large" type="primary"  class="btn" @click="locate('#/steak')"
      >Steak</van-button
    >
    <van-button  size="large" type="primary"  class="btn" @click="locate('#/drink')"
      >Drink</van-button
    >
    <van-button  size="large" type="primary"  class="btn">Pasta</van-button>
    <van-button  size="large" type="primary"  class="btn">Sushi</van-button>
  </van-popup>

  <div>
    <input type="text" class="search" id="search" />
    <button class="searchbtn" @click="filtered()">🔍</button>
    <button class="cancel" @click="cancel()">❌</button>
  </div>
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
          <p class="Menu_count" id="Menu_count">🗙 {{ menu.count }}</p>
          <div class="Menu_">
            <button class="Menu_button-minus" @click="minus(index)">
            <div class="text">➖</div>
            </button>
            <button class="Menu_button-plus" @click="plus(index)">
            <div class="text">➕</div>
            </button>
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
import axios from "axios";
import _ from "lodash";
import TabBar from "../components/TabBar.vue";
import { ref, onMounted } from "vue";
import TableInfo from "../components/TableInfo.vue";

let show = ref(false)
const showPopup = () => {
  show.value = true
}
const locate = (url) => {
  location.href = url
}
const filtered = () => {
  console.log("filtered");
  let str = document.getElementById("search").value;
  let rs = menues.value.filter((menu) => menu.name.includes(str));
  console.log(rs);
  menues.value = rs;
};
const cancel = () => {
  menues.value = backupdata.value;
};

const plus = (index) => {
  const num = document.getElementsByClassName("Menu_count");
  num[index].style.visibility = "visible";
  menues.value[index].count += 1;
};

const minus = (index) => {
  if (menues.value[index].count > 0) {
    menues.value[index].count -= 1;
  }

  if (menues.value[index].count == 0) {
    const num = document.getElementsByClassName("Menu_count");
    num[index].style.visibility = "hidden";
  }
};

const menues = ref([]);
const backupdata = ref([]);
onMounted(() => {
  axios.get("http://localhost:8082/product/drink").then(function (response) {
    menues.value.push(...response.data.itemlist);
    backupdata.value.push(...response.data.itemlist);
  });
});
</script>

<style scoped>
.inline {
  display: flex;
}
.text{
display: flex;
margin-left: -0.15rem;
margin-top: -0.035rem;
}
.btn {
  box-shadow:inset 0px 1px 0px 0px #97c4fe;
	background:linear-gradient(to bottom, #3d94f6 5%, #1e62d0 100%);
	background-color:#3d94f6;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #1570cd;
}

.btn:hover{
  background:linear-gradient(to bottom, #1e62d0 5%, #3d94f6 100%);
	background-color:#1e62d0;
}

.btn:active{
  position:relative;
	top:1px;
}
.bars {
margin-top: 0.3rem;
margin-left: 0.3rem;
}
.amount {
  display: inline-block;
  height: 0.5rem;
  width: 0.8rem;
  font-size: 0.3rem;
  margin-left: 0.1rem;
}
.amount_option {
  font-size: 0.3rem;
  margin-top: 0.1rem;
}
#people {
  font-size: 0.34rem;
  color: #096bec;
  margin-left: 0.1rem;
  margin-top: 0.02rem;
}

.search {
  height: 0.55rem;
  width: 58%;
  margin-left: 0.3rem;
  padding: 0 16px;
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 0 1px #ccc inset;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
.searchbtn {
  display: inline-block;
  position: relative;
  height: 0.54rem;
  width: 0.54rem;
  top: 0.02rem;
}

.cancel {
  display: inline-block;
  position: relative;
  height: 0.54rem;
  width: 0.54rem;
  top: 0.02rem;
  text-align: center;
}
.search:focus {
  outline: 0;
  box-shadow: 0 0 0 2px rgb(33, 150, 243) inset;
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
  font-family: "Calling Code", Courier, monospace;
  background-color: #0ca33e;
  margin-top: 0.5rem;
  margin-left: 0.2rem;
}
</style>
<style scoped>
.scroll {
  overflow: auto;
  height: 8rem;
  padding-top: 0.1rem;
  padding-left: 0.3rem;
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
  font-size: 0.22rem;
}

.Menu_price {
  margin-top: 0.15rem;
  font-size: 0.28rem;
  font-weight: bold;
}

.Menu_orderbox {
  position: relative;
  margin-top: 0.2rem;
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

.Menu_button-minus {
  width: 0.9rem;
  height: 0.45rem;
  box-shadow:inset 0px 1px 0px 0px #54a3f7;
	background:linear-gradient(to bottom, #007dc1 5%, #0061a7 100%);
	background-color:#007dc1;
	border:1px solid #124d77;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	padding:8px 24px;
	text-shadow:0px 1px 0px #154682;
  padding-top: 0.06rem;
}
.Menu_button-minus:hover{
  background:linear-gradient(to bottom, #0061a7 5%, #007dc1 100%);
	background-color:#0061a7;
}
.Menu_button-minus:active {
	position:relative;
	top:1px;
}
.Menu_button-plus {
  width: 0.9rem;
  height: 0.45rem;
  box-shadow:inset 0px 1px 0px 0px #54a3f7;
	background:linear-gradient(to bottom, #ee4603 5%, #d85001 100%);
	background-color:#d85001;
	border:1px solid #d85001;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	padding:8px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #154682;
  padding-top: 0.06rem;
}
.Menu_button-plus:hover{
  background:linear-gradient(to bottom, #db7851 5%, #f05b06 100%);
  background-color:#d85001;
}
.Menu_button-plus:active {
	position:relative;
	top:1px;
}
</style>
