import Vue from 'vue'
import App from './App.vue'
import {
  Button, Radio, Container, Header, Main, Aside, Menu, Submenu,
  MenuItem, MenuItemGroup, Dropdown, DropdownMenu, DropdownItem,
  Row, Col, Card, Table, TableColumn, Breadcrumb, BreadcrumbItem, 
  Tag, Form, FormItem, Input, Select, Option, Switch, DatePicker,TimePicker, 
  Dialog, Pagination,MessageBox,Message, Calendar, Carousel, CarouselItem, Avatar, Descriptions, DescriptionsItem
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/less/index.less'

import router from './router/index.js'  //注意为相对路径
import store from './store'
import http from './api/index'
import './mock/index.js'   //mockjs提供后台接口
import './router/permission'

//登录状态持久化
let user = localStorage.getItem('user')
if(user){ // 用户信息存在
  user = JSON.parse(user)
  store.commit('login/setUser', user)
}

Vue.use(Button);
Vue.use(Radio);
Vue.use(Container);
Vue.use(Main);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Tag);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(Switch);
Vue.use(DatePicker);
Vue.use(TimePicker);
Vue.use(Dialog);
Vue.use(Pagination);
Vue.use(Calendar);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Avatar);
Vue.use(Descriptions);
Vue.use(DescriptionsItem);

Vue.prototype.$http = http // axios不是一个插件，把它注册到vue的原型对象上
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message

Vue.config.productionTip = false

new Vue({
  router,
  store,  //全局注入
  render: h => h(App),
  
}).$mount('#app')
