<template>
  <li v-for="(todo, index) in todos">
    <i class="fa-sharp fa-solid fa-check"></i>
    {{ todo }}
    <button @click="btnDelete(index)">삭제</button>
  </li>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "Item",
  setup() {
    const store = useStore();
    const todos = computed(() => store.getters.todos);

    // 삭제
    // store에 있는 actions의 removeTodo를 index로 받아옴
    const btnDelete = (index) => {
      //console.log("index : " + index);
      store.dispatch("removeTodo", index);
    };
    return {
      todos,
      btnDelete,
    };
  },
};
</script>

<style scoped></style>
