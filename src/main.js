import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
firebase.initializeApp({
  apiKey: "AIzaSyDEdShBXy1zFGowqwNBvC0z5yfOtlSMo6s",
  authDomain: "vue-crm-project-bd047.firebaseapp.com",
  databaseURL: "https://vue-crm-project-bd047.firebaseio.com",
  projectId: "vue-crm-project-bd047",
  storageBucket: "vue-crm-project-bd047.appspot.com",
  messagingSenderId: "257383306613",
  appId: "1:257383306613:web:782424a723592588ad6f3c"
});


let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


