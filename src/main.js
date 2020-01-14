import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import {routes} from './router/routes'
Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',

  // remembering where the user scroll the last touch.
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        selector: to.hash
      };
    }
    return {
      x: 0,
      y: 100
    }
  }
})

/// router Middleware

router.beforeEach((to,from,next)=> {
console.log("Global Before Each");

// ! 3 options to pass in the next method ! 1.path, 2. false to abort ,3. object with path for redirection.
next();
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')