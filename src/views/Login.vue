<template>
  <section id="login-page">
    <form class="login__form" @submit.prevent="login">
      <input type="text" placeholder="대화명.." class="login__input" v-model="userName" autofocus />
      <button type="submit" class="btn-primary">참가하기</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      userName: ""
    };
  },
  methods: {
    login() {
      const url = "/chatroom/";
      this.$router.push(url + this.userName);
    }
  }
};
</script>

<style >
.login__form {
  margin-top: 50px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login__input {
  width: 100%;
  border: none;
  border-bottom: 1px solid black;
  padding: 10px 0;
  background-color: inherit;
  outline: none;
  font-size: 16px;
  margin-bottom: 20px;
}
</style>