<template>
  <section id="chatroom">
    <div class="chatroom__list-wrapper">
      <ChatList></ChatList>
    </div>
    <div class="chatroom__form-wrapper">
      <ChatForm></ChatForm>
    </div>
    <div class="chat-log">
      <div class="chat-log__header">
        <h4 class="chat-log__title">Logs</h4>
        <button class="open-log-btn" @click="isLogOpen = !isLogOpen">
          open
        </button>
      </div>
      <div class="log-wrapper" :class="{ open: isLogOpen }">
        {{ SHOW_LOG }}
      </div>
    </div>
  </section>
</template>

<script>
import ChatForm from "../components/ChatForm"
import ChatList from "../components/ChatList"
import { mapGetters, mapMutations } from "vuex"

export default {
  data() {
    return {
      username: "",
      isLogOpen: false,
    }
  },
  created() {
    this.connect()
    this.$socket.on("chat", (data) => {
      const name = data.from.name
      const msg = data.msg
      this.SEND_MSG({
        name,
        msg,
      })
    })
  },
  components: {
    ChatForm,
    ChatList,
  },
  computed: {
    ...mapGetters(["SHOW_LOG"]),
  },
  methods: {
    ...mapMutations(["SEND_MSG"]),
    connect() {
      this.username = this.$route.params.name
      this.$connect({ name: this.username })
    },
  },
}
</script>

<style>
#chatroom {
  height: calc(100% - 82px);
  position: relative;
}

.chatroom__list-wrapper {
  padding: 20px;
  min-height: 600px;
}

.chat-log {
  width: 100%;
  background-color: rgb(102, 102, 102);
}

.chat-log__header {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #ddd;
}

.log-wrapper {
  color: white;
  font-size: 10px;
  max-height: 100px;
  overflow-y: auto;
  transition: height 0.5s ease;
  height: 0px;
}

.log-wrapper.open {
  height: 100px;
}

.chatroom__form-wrapper {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>
