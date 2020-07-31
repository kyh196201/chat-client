import io from "socket.io-client"

import store from "../store/"

// const server = "http://localhost:3000"

const socket = io.connect("http://localhost:3000")

const SocketPlugin = {
  install(Vue) {
    Vue.prototype.$connect = function({ name }) {
      //서버로 자신의 정보를 전송한다
      socket.emit("login", {
        name,
      })
    }

    Vue.prototype.$sendMessage = function({ name, msg }) {
      // 서버로 메시지를 전송한다.
      socket.emit("chat", {
        name,
        msg,
      })
      store.commit("SEND_MSG", {
        name,
        msg,
      })
    }

    socket.on("login", function(data) {
      const logMsg = data + "님이 입장했습니다."
      store.commit("INPUT_LOG", { log: logMsg })
    })

    socket.on("disconnect", function(data) {
      const logMsg = data + "님이 퇴장했습니다."
      store.commit("INPUT_LOG", { log: logMsg })
    })

    Vue.prototype.$socket = socket
  },
}

export default SocketPlugin

//서버 연결

//메시지 입력

//메시지 수신
