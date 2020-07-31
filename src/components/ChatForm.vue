<template>
  <form id="ChatForm" @submit.prevent="inputMsg">
    <input
      type="text"
      class="chatroom__input"
      v-model="msg"
      placeholder="메시지를 입력하세요"
    />
    <button type="submit" class="chatroom__button">입력</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
    }
  },
  computed: {
    name() {
      return this.$route.params.name
    },
  },
  methods: {
    inputMsg() {
      const msg = this.msg.trim()

      if (!msg) return

      this.$sendMessage({
        name: this.name,
        msg,
      })

      this.msg = ""
    },
  },
}
</script>

<style>
.chatroom__input {
  border: none;
  padding: 20px;
  outline: none;
  display: block;
  width: 100%;
  font-size: 18px;
}

.chatroom__button {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  font-size: 12px;
}
</style>
