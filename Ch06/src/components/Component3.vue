<template>
  <h4>Component3</h4>

  <!-- index.js 에서 mutations, actions 참고 -->
  <p>Vuex count : {{ store.state.count }}</p>
  <input type="text" />
  <button @click="btnInit">초기화</button>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const count = ref(0);

const btnInit = function () {
  // store action 호출
  store.dispatch("initCount");
};
</script>

<style scoped></style>
