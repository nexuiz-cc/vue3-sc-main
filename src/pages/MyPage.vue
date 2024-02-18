<template>
  <div class="page" id="page">
    <div class="title">マイページ</div>
    <div class="dropdown-wrap">
      <a-dropdown :placement="right">
        <a-button>
          <MenuOutlined />
        </a-button>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <a-switch class="switch" v-model:checked="checked" @click="handleChange()" checked-children="Dark Mode"
                un-checked-children="Light Mode" />
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">2nd menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">3rd menu item</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
    <div class="card">
      <a-card hoverable style="width: 355px">
        <template #cover>
          <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" height="200" />
        </template>
        <template #actions>
          <setting-outlined key="setting" />
          <edit-outlined key="edit" />
          <ellipsis-outlined key="ellipsis" />
        </template>
        <a-card-meta title="Card title" description="This is the description" style="height: 50px">
          <template #avatar>
            <a-avatar src="https://joeschmoe.io/api/v1/random" />
          </template>
        </a-card-meta>
      </a-card>
    </div>
    <br />
    <div :style="{ border: '1px solid #d9d9d9', borderRadius: '4px' }" class="calendar">
      <a-calendar v-model:value="value" :fullscreen="false" @panelChange="onPanelChange" class="calendar_content"
        @select="onSelect" />
    </div>
  </div>
  <TabBar></TabBar>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import {
  MenuOutlined, SettingOutlined, EditOutlined, EllipsisOutlined,
} from '@ant-design/icons-vue';
import TabBar from '../components/TabBar.vue';

const right = 'bottomRight';
const checked = ref(false);
const value = ref();
const handleChange = () => {
  const el = document.getElementById('page');
  if (checked.value) {
    el.setAttribute('class', 'page_dark');
  } else {
    el.setAttribute('class', 'page');
  }
};
const onPanelChange = (val, mode) => {
  console.log(val, mode);
};
onMounted(() => { });
</script>

<style scoped>
.dm {
  height: 1200px;
}

.page_dark {
  background-color: #000;
  height: 800px;
  color: #fff;
}

.page {
  background-color: #fff;
  height: 800px;
  color: #000;
}

.dropdown-wrap {
  display: flex;
  position: relative;
  left: 310px;
  top: -15px;
}

.switch {
  background-color: lightblue;
  color: #000 !important;
}

.card {
  position: relative;
  top: -5px;
  left: 10px;
}

.calendar {
  width: 355px;
  position: relative;
  top: -10px;
  left: 10px;
}

.title {
  position: relative;
  left: 20px;
  top: 15px;
  font-size: 20px;
}
</style>
