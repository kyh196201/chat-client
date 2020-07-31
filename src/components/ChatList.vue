<template>
  <div class="chatroom__chats-list">
    <div v-for="(chat, index) in READ_MSG" :key="index">
      <Chat :data="chat"></Chat>
    </div>
  </div>
</template>

<script>
import Chat from "./Chat"
import { mapGetters } from "vuex"

export default {
  components: {
    Chat,
  },
  computed: {
    ...mapGetters(["READ_MSG"]),
  },
}
</script>

<style></style>
