import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 移动端300毫秒点击延迟问题，在某些机型或者浏览器上执行click事件时，会延迟
// import fastclick from "fastclick";
import "./assets/styles/reset.css";
import "./assets/styles/border.css";
import "./assets/styles/iconfont.css";

Vue.config.productionTip = false;
// fastclick.attach(document.attach)
Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
