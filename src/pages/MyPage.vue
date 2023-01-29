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
    <van-collapse-item title="Public Docs" name="1"> Lorem ipsum dolor sit, amet consectetur adipisicing elit.  </van-collapse-item>
    <van-collapse-item title="Private Docs" name="2"> Eveniet animi error eligendi</van-collapse-item>
    <van-collapse-item title="Other Docs" name="3">Vel officia iure quidem totam aut blanditiis velit </van-collapse-item>
  </van-collapse>
  <TabBar></TabBar>
</template>

<script setup>
import { ref } from 'vue';
import TabBar from '../components/TabBar.vue'
const activeNames = ref(['1']);
</script>

<style scoped>
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
  margin-left: -0.5rem;
  font-size: 0.3rem;
}
.a2 {
  margin-left: 0.3rem;
  font-size: 0.3rem;
}

* {
  font-family: 'Consolas', Courier, monospace;
}
</style>
