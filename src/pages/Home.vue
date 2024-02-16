<template>
  <Banner></Banner>
  <Cell></Cell>
  <TabBar></TabBar>
</template>

<script setup>
import { computed, onMounted, reactive, ref, watchEffect } from 'vue'
import Banner from '../components/Banner.vue'
import Cell from '../components/Cell.vue'
import TabBar from '../components/TabBar.vue'
</script>

<style scoped></style>
