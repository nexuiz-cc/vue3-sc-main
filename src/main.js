/* eslint-disable import/no-extraneous-dependencies */
import { createApp } from 'vue';
import './style.css';
import {
  Button,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Cell,
  CellGroup,
  NavBar,
  Field,
  Collapse,
  CollapseItem,
  Search,
  ConfigProvider,
  Switch,
  Popup,
  Icon,
  Card,
} from 'vant';
import Antd from 'ant-design-vue';
// import { Button, message } from 'ant-design-vue';
import App from './layouts/App.vue';
import router from './plugins/router';
import 'vant/lib/index.css';
import './plugins/uc-flexible';

const app = createApp(App);
app.use(Button);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Swipe);
app.use(SwipeItem);
app.use(Cell);
app.use(CellGroup);
app.use(NavBar);
app.use(Field);
app.use(Collapse);
app.use(CollapseItem);
app.use(Search);
app.use(router);
app.use(ConfigProvider);
app.use(Switch);
app.use(Popup);
app.use(Icon);
app.use(Card);
app.use(Antd);
// app.use(Button);
app.mount('#app');
