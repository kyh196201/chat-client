const chatModule = {
  state: {
    log: [],
    msgData: [],
  },
  getters: {
    SHOW_LOG(state) {
      return state.log
    },
    READ_MSG(state) {
      return state.msgData
    },
  },
  mutations: {
    INPUT_LOG(state, { log }) {
      state.log = [...state.log, log]
    },
    SEND_MSG(state, { name, msg }) {
      state.msgData = [
        ...state.msgData,
        {
          name,
          msg,
        },
      ]
    },
  },
  actions: {},
}

export default chatModule
