<template>
  <h3 class="txt">Search</h3>
  <van-search
    v-model="value"
    placeholder="Please enter search keyword!"
    input-align="center"
    left-icon="none"
    right-icon="search"
    autocomplete="on"
    class="search"
  />
  <div>
    <h3 class="txt">Hot Search</h3>
    <p class="txt2"><a href="http://localhost:8081/#/user">1. Service Portal.</a></p>
    <p class="txt2"><a href="http://localhost:8081/#/user">2. A mobile-friendly.</a></p>
    <p class="txt2"><a href="http://localhost:8081/#/user">3. Now Platform. </a></p>
    <p class="txt2"><a href="http://localhost:8081/#/user">4. It is an alternative to System. </a></p>
  </div>

  <div>
    <h3 class="txt">History</h3>
    <van-button round  plain color='blue' size='small' type="primary" class="txt2">Service Portal</van-button>
    <van-button round  plain color='blue' size='small' type="primary" class="txt2">Now Platform</van-button>
    <van-button round  plain color='blue' size='small' type="primary" class="txt2">Alternative System</van-button>
  </div>

<TabBar></TabBar>
</template>

<script setup>
import TabBar from '../components/TabBar.vue'
</script>

<style scoped>
.search {
  margin-top: 0.3rem;
}

.txt {
  margin-top: 0.5rem;
  margin-left: 0.2rem;
  font-size: 0.6rem;
  color: #096bec;
}

.txt2 {
  margin-top: 0.1rem;
  margin-left: 0.2rem;
  font-size: 0.3rem;
}

*{
  --van-search-input-height:50px;
}
.van-field__right-icon{
  height: 0.5rem;
}
</style>
