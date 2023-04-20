<template>
  <h4>Ch08.Vuetify 실습</h4>

  <p>
    <router-link to="/components">Components</router-link> /
    <router-link to="/grids">Grids</router-link> /
    <router-link to="/layout">Layout</router-link>
  </p>
  <hr />
  <router-view></router-view>
</template>

<script setup></script>

<style scoped>
#app {
  padding: 10px;
}
</style>
