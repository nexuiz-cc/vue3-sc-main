<template>
  <div class="content">
    <h1>Login</h1>
    <h4>Accusamus at soluta amet id esse eaque.</h4>
    <van-form>
      <van-cell-group inset>
        <div class="Username">Username</div>
        <div></div>
        <van-field
          v-model="username"
          name="username"
          label=""
          placeholder="Please enter your username."
          :rules="[{ required: true, message: 'Please input username!' }]"
        />
        <div class="Password">Password</div>
        <div></div>
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label=""
          placeholder="Please enter your password."
          :rules="[{ required: true, message: 'Please input password!' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button
          round
          block
          type="primary"
          style="font-size: 0.25rem"
          @click="onSubmit()"
        >
          Login
        </van-button>
      </div>
    </van-form>

    <div class="footbox" style="margin-top: 0.3rem">
      <a class="tishi" @click="fg_username()">forgot username</a>
      <a class="tishi" @click="fg_password()">forgot password</a>
      <a class="tishi" @click="fg_all()">forgot username & password</a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, watchEffect, ref, computed } from "vue";
import { store } from "../stores/store";
import axios from 'axios';
import { useRouter } from "vue-router";
const router = useRouter();
const username = ref("username");
const password = ref("password");

function fg_username() {
  router.push("./fg_username");
}
function fg_password() {
  router.push("./fg_password");
}
function tohome() {
  router.push("/home");
}
const login = () => {
  store.isLogin = true;
};
const onSubmit = () => {
  if (username.value == store.username && password.value == store.password) {
    login();
    console.log("success");
    console.log("username:",store.username);
    console.log("password:",store.password);
    tohome();
  } else {
    console.log("username:",store.username);
    console.log("password:",store.password);
  }
};
</script>

<style scoped>
* {
  font-family: "Consolas", Courier, monospace;
}
.content {
  max-width: 6.4rem;
  margin: 0 auto;
}
.content .fhbtn {
  padding-top: 0.27rem;
}
.content .fhbtn a {
  display: block;
  width: 0.23rem;
  height: 0.25rem;
  background: url(../assets/img/history1.png) no-repeat 0 0;
  background-size: 100%;
  margin-left: 0.3rem;
}
.content h1 {
  width: 2.18rem;
  height: 1.35rem;
  background-size: 100%;
  margin: 0 auto;
  margin-top: 1.22rem;
  margin-left: 0.2rem;
  font-size: 0.8rem;
}
.content .login {
  width: 2rem;
  height: 0.38rem;
  margin: 0 auto;
  margin-top: 0.85rem;
}
.login a {
  width: 0.97rem;
  height: 0.38rem;
  font-size: 0.35rem;
  line-height: 0.35rem;
  float: left;
  color: #4c4f50;
  text-align: center;
}
.login span {
  float: left;
  height: 0.38rem;
  border-left: 1px solid #4c4f50;
}
.content .login-box {
  position: relative;
}
.content .login-box .lsolid {
  width: 1.96rem;
  height: 0.18rem;
  border-bottom: 1px solid #4c4f50;
  position: absolute;
  top: 0;
  left: 0.1rem;
}
.content .login-box .rsolid {
  width: 1.96rem;
  height: 0.18rem;
  border-bottom: 1px solid #4c4f50;
  position: absolute;
  top: 0;
  right: 0.1rem;
}
.content ul {
  width: 5.78rem;
  height: 1.92rem;
  border: 1px solid #e5e7e8;
  background: #fff;
  margin: 0 auto;
  margin-top: 0.68rem;
}
.content ul li {
  height: 0.95rem;
  position: relative;
}
.content ul li.lifirst {
  border-bottom: 1px solid #e5e7e8;
}
.content ul li input {
  padding-left: 1.24rem;
  width: 4.54rem;
  height: 100%;
  font-size: 0.4rem;
}
.content ul li span {
  width: 1.23rem;
  height: 0.49rem;
  position: absolute;
  top: 0.26rem;
  left: 0;
  border-right: 1px solid #676868;
  color: #676868;
  font-size: 0.25rem;
  line-height: 0.49rem;
  text-align: center;
}
.content .footbox {
  display: block;
  position: absolute;
  width: 4.65rem;
  height: 0.45rem;
  left: 3.3rem;
  top: 6.5rem;
}
.content .login-btn {
  width: 4.65rem;
  height: 0.65rem;
  background: #4c4f50;
  color: #fff;
  text-align: center;
  line-height: 0.65rem;
  border-radius: 8px;
  display: block;
  margin-top: 0.62rem;
  font-size: 0.28rem;
}
.content .tishi {
  display: block;
  justify-content: flex-end;
  width: 5rem;
  font-size: 0.25rem;
  height: 0.3rem;
  margin-left: -2.5rem;
  text-align: right;
}

.reg {
  margin-left: 0.3rem;
}

.Username,
.Password {
  font-size: 0.3rem;
  margin-top: 0.1rem;
  font-weight: bolder;
}

h4 {
  font-size: 0.28rem;
  margin-left: 0.2rem;
  margin-top: -0.2rem;
  padding-bottom: 0.5rem;
}
</style>
