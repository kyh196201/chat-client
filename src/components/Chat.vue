<template>
  <div class="msg" v-if="!isMine">
    <div class="chat-sender">{{ name }} :</div>
    <div class="chat-message">{{ msg }}</div>
  </div>
  <div v-else class="msg my-msg">
    <div class="chat-message">{{ msg }}</div>
    <div class="chat-sender">::</div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  computed: {
    name() {
      return this.isMine ? "나" : this.data.name
    },
    msg() {
      return this.data.msg
    },
    isMine() {
      return this.data.name === this.$route.params.name
    },
  },
}
</script>

<style>
.msg {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid black;
  justify-content: flex-start;
}

.my-msg {
  justify-content: flex-end;
}
</style>
