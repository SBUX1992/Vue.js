<template>
  <h4>Component2</h4>
  <!-- app.vue params에 선언되어 있는 name, age, addr을 뽑아옴 -->
  <p>
    params : {{ $route.params }}<br />
    name : {{ $route.params.name }}<br />
    age : {{ $route.params.age }}<br />
    addr : {{ $route.params.addr }}<br />
  </p>
</template>
<script setup></script>
<style scoped></style>
