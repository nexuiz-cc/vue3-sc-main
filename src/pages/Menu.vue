<template>
  <div class="shop">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="飲食店 1">
        <div class="intro">
          <strong class="strong">Raconter期間限定フェア開催中です！</strong>
          <p class="intro_text">ホテルベルクラシック東京に構えるイタリアンフレンチレストラン四季折々の食材くを取り入れた創作フレンチをスタイリッシュなカジュアル空間でご堪能...</p>
        </div>
        <div class="box">
          <div class="inline">
            <div class="bars">
              <van-icon name="bars" color="#1989fa" size="25" @click="showPopup" />
            </div>
            <TableInfo></TableInfo>
          </div>

          <div>
            <input type="text" class="search" id="search" />
            <button class="searchbtn" @click="filtered()">🔍</button>
            <button class="cancel" @click="cancel()">❌</button>
          </div>

          <van-popup style="background-color: #aee2ff" v-model:show="show" position="left"
            :style="{ width: '30%', height: '100%' }">
            <van-button size="large" type="primary" class="btn" @click="locate('/menu')">Seafood</van-button>
            <van-button size="large" type="primary" class="btn" @click="locate('/steak')">Steak</van-button>
            <van-button size="large" type="primary" class="btn" @click="locate('/drink')">Drink</van-button>
            <van-button size="large" type="primary" class="btn" @click="locate('/pasta')">Pasta</van-button>
            <van-button size="large" type="primary" class="btn" @click="locate('/sushi')">Sushi</van-button>
          </van-popup>

          <ul class="scroll">
            <li v-for="(item, index) in menues" class="Menu" :key="index">
              <div class="Menu_imagearea">
                <img :src="item.image" class="Menu_image" />
              </div>
              <div class="Menu_detail">
                <h4 class="Menu_name">{{ item.name }}</h4>
                <p class="Menu_description">{{ item.description }}</p>
                <p class="Menu_price">¥{{ item.price }}</p>
                <div class="Menu_orderbox" ref="box">
                  <div class="Menu_count" id="Menu_count" >
                    <div v-show="item.count > 0">🗙 {{ item.count }}</div>
                  </div>
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
            <button class="btnadd" @click="addtoCart(index)">Add to cart</button>
          </div>
        </div>
      </a-tab-pane>
      <a-tab-pane key="2" tab="飲食店 2">飲食店 2</a-tab-pane>
      <a-tab-pane key="3" tab="飲食店 3">飲食店 3</a-tab-pane>
      <a-tab-pane key="4" tab="飲食店 4">飲食店 4</a-tab-pane>
    </a-tabs>
  </div>
  <TabBar></TabBar>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import TabBar from '../components/TabBar.vue';
import TableInfo from '../components/TableInfo.vue';
import { setMenuData, getMenuData, setShopingCart } from '../api/api';

const menues = ref([]);
const backupdata = ref([]);
const box = ref();
onMounted(() => {
  getMenuData('seafood').then((res) => {
    menues.value = res.data.itemlist;
    backupdata.value = res.data.itemlist;
  });
});
const plus = (index) => {
  menues.value[index].count += 1;
  menues.value[index].totalPrice = menues.value[index].count * menues.value[index].price;
  setMenuData('seafood', {
    id: 'seafood',
    itemlist: menues.value,
  });
};

const show = ref(false);
const showPopup = () => {
  show.value = true;
};

const addtoCart = () => {
  menues.value = backupdata.value;
  let sum = 0;
  const arr = menues.value;

  for (const item of arr) {
    sum += item.totalPrice;
  }

  setMenuData('seafood', {
    id: 'seafood',
    itemlist: menues.value,
  });
  backupdata.value = backupdata.value.filter((item) => {
    if (item.count > 0) {
      return true;
    }
    return null;
  });

  setShopingCart('seafood', {
    id: 'seafood',
    itemlist: backupdata.value,
    totalPrice: sum,
  });
};
const minus = (index) => {
  if (menues.value[index].count > 0) {
    menues.value[index].count -= 1;
    menues.value[index].totalPrice = menues.value[index].count * menues.value[index].price;
    setMenuData('seafood', {
      id: 'seafood',
      itemlist: menues.value,
    });
  }
};
const activeKey = ref('1');
const filtered = () => {
  const str = document.getElementById('search').value;
  const rs = menues.value.filter((menu) => menu.name.includes(str));
  menues.value = rs;
};
const cancel = () => {
  menues.value = backupdata.value;
};
const locate = (url) => {
  // eslint-disable-next-line no-restricted-globals
  location.href = url;
};
</script>

<style scoped>
#people {
  font-size: 0.34rem;
  color: #096bec;
  margin-left: 0.1rem;
  margin-top: 0.02rem;
}

.inline {
  display: flex;
}

.bars {
  margin-top: 0.3rem;
  margin-left: 0.3rem;
}

.van-popup {
  background: #1e62d0;
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

.btn {
  box-shadow: inset 0px 1px 0px 0px #97c4fe;
  background: linear-gradient(to bottom, #3d94f6 5%, #1e62d0 100%);
  background-color: #3d94f6;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #1570cd;
}

.btn:hover {
  background: linear-gradient(to bottom, #1e62d0 5%, #3d94f6 100%);
  background-color: #1e62d0;
}

.btn:active {
  position: relative;
  top: 1px;
}

.text {
  display: flex;
  margin-left: -0.15rem;
  margin-top: -0.06rem;
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

.btnadd {
  width: 5.8rem;
  height: 0.8rem;
  border: white;
  color: aliceblue;
  font-size: 0.3rem;
  font-family: 'Calling Code', Courier, monospace;
  background-color: #0ca33e;
  margin-top: 3%;
  border-radius: 5px;
  margin-left: 4.1%;
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
  margin-top: -0.05rem;
  padding-top: 0.03rem;
  margin-left: 0.2rem;
  font-size: 0.22rem;
}

.Menu_price {
  margin-top: -0.05rem;
  font-size: 0.28rem;
  font-weight: bold;
}

.Menu_orderbox {
  position: relative;

}

.Menu_count {
  display: flex;
  margin-left: 1.1rem;
  margin-top: -23px;
  font-size: 0.22rem;
  height: 20.25px;
}

.Menu_ {
  margin-top: 0.3rem;
}

.Menu_button-minus {
  width: 0.9rem;
  height: 0.45rem;
  box-shadow: inset 0px 1px 0px 0px #54a3f7;
  background: linear-gradient(to bottom, #007dc1 5%, #0061a7 100%);
  background-color: #007dc1;
  border: 1px solid #124d77;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  padding: 8px 24px;
  text-shadow: 0px 1px 0px #154682;
  padding-top: 0.06rem;
}

.Menu_button-minus:hover {
  background: linear-gradient(to bottom, #0061a7 5%, #007dc1 100%);
  background-color: #0061a7;
}

.Menu_button-minus:active {
  position: relative;
  top: 1px;
}

.Menu_button-plus {
  width: 0.9rem;
  height: 0.45rem;
  box-shadow: inset 0px 1px 0px 0px #54a3f7;
  background: linear-gradient(to bottom, #ee4603 5%, #d85001 100%);
  background-color: #d85001;
  border: 1px solid #d85001;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  padding: 8px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #154682;
  padding-top: 0.06rem;
}

.Menu_button-plus:hover {
  background: linear-gradient(to bottom, #db7851 5%, #f05b06 100%);
  background-color: #d85001;
}

.Menu_button-plus:active {
  position: relative;
  top: 1px;
}

.shop {
  position: relative;
  width: 90%;
  left: 10px;
  margin-top: 10px;
}

.intro {
 height: 60px;
}
.intro_text{
  line-height: 18px;
  position: relative;
  left: 10px;
  top:-5px;
  font-family: 'Meiryo UI';
}
.strong{
  position: relative;
  top: -8px;
  left: 2px;
  font-family: 'Meiryo UI';
}
.box{
  position: relative;
  left: -15px;
  width: 420px;
}

</style>
