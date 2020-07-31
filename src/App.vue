<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="nav__link">Home</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./assets/css/styles.css";

#app {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
}

#nav {
  padding: 30px;
  border-bottom: 2px solid #dddddd;
  display: flex;
  justify-content: center;
  align-content: center;
}

.nav__link {
  font-size: 20px;
  font-weight: bold;
}

.nav__link:hover {
  opacity: 0.5;
}
</style>
