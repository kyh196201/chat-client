<template>
  <div class="home">
    <div class="start-button-wrapper">
      <router-link to="/login" class="home__start-btn btn-primary">시작하기</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>

<style>
.start-button-wrapper {
  margin-top: 50px;
  display: flex;
  padding: 30px;
  justify-content: center;
  align-content: center;
}
</style>
