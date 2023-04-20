<template>
  <h4>Component1</h4>
  <!-- app.vue query에 선언되어 있는 name, age, addr을 뽑아옴 -->
  <p>
    query : {{ $route.query }}<br />
    name : {{ $route.query.name }}<br />
    age : {{ $route.query.age }}<br />
    addr : {{ $route.query.addr }}<br />
  </p>
</template>
<script setup></script>
<style scoped></style>
