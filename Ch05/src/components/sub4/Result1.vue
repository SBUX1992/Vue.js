<!-- Form1.vue에 입력된 값을 Result1.vue로 전송 -->
<template>
  <h4>Result1</h4>
  <p>
    uid: {{ $route.query.uid }}<br />
    name: {{ $route.query.name }}<br />
    age: {{ $route.query.age }}<br />
    addr: {{ $route.query.addr }}<br />
  </p>
</template>

<script sertup></script>
<style scoped></style>
