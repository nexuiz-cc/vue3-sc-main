<template>
  <div class="header">
    <div class="user-box">
      <div class="h1"></div>
      <a href="login_m.html" class="a1">Login</a>
      <a href="reg_m.html" class="a2">Register</a>
    </div>
    <ul class="clear">
      <li>
        <span>0</span>
        <p>Follows</p>
      </li>
      <li>
        <span>0</span>
        <p class="end">Fans</p>
      </li>
    </ul>
  </div>
  <div class="h1"></div>
  <van-collapse v-model="activeNames">
    <van-collapse-item title="Public Docs" name="Public">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    </van-collapse-item>
    <van-collapse-item title="Private Docs" name="Private"> Eveniet animi error eligendi</van-collapse-item>
    <van-collapse-item title="Settings" name="Settings">
      <div class="setting">
        <div class="dm">
          <van-switch v-model="checked" />
          <p>Dark Mode</p>
        </div>
        <button class="logout" @click="locate()">Log out</button>
      </div>
    </van-collapse-item>
  </van-collapse>

  <TabBar></TabBar>
</template>

<script setup>
import { ref } from 'vue';
import TabBar from '../components/TabBar.vue';
import { store } from '../stores/store';

const activeNames = ref(['1']);
const checked = ref([false]);
const locate = () => {
  store.isLogin = false;
  // eslint-disable-next-line no-restricted-globals
  location.href = '#/login';
};
</script>

<style scoped>
.logout {
  font-size: 0.3rem;
  margin-left: 0.2rem;
  position: relative;
  bottom: 0.2rem;
  left: 0.2rem;
}
.header h2 {
  width: 1.02rem;
  height: 1.02rem;
  border-radius: 50%;
  margin: 0 auto;
}
.header h2 img {
  width: 100%;
}
.header .user-box {
  width: 1.14rem;
  font-size: 0.25rem;
  color: #000;
  margin: 0 auto;
  margin-top: 0.2rem;
}
.user-box a {
  color: #000;
}
.header ul {
  margin-top: 0.4rem;
}
.header ul li {
  width: 50%;
  height: 0.7rem;
  float: left;
  color: #000;
}
.header ul li span {
  height: 0.37rem;
  line-height: 0.37rem;
  text-align: center;
  display: block;
  font-size: 0.25rem;
}
.header ul li p {
  text-align: center;
  font-size: 0.3rem;
  height: 0.32rem;
  line-height: 0.32rem;
  border-right: 1px solid #fff;
}
.header ul li p.end {
  border: 0;
}

.h1 {
  margin-top: 1rem;
}
.a1 {
  margin-left: -0.6rem;
  font-size: 0.3rem;
}
.a2 {
  margin-left: 0.3rem;
  font-size: 0.3rem;
}

* {
  font-family: 'Consolas', Courier, monospace;
}

.setting {
  display: inline-flex;
  font-size: 0.25rem;
}
</style>
