import Vue from "vue"
import Vuex from "vuex"

import chatModule from "./modules/chat.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { chat: chatModule },
})
