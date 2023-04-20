<template>
  <h4>Parent</h4>
  <p>부모 컴포넌트</p>
  <Child></Child>
  <!-- <ChildVue 하면 하위 파일인 Child 자동 입력 됨 -->
</template>
<script>
import Child from "./Child.vue";

export default {
  name: "Parent",
  components: { Child },
};
</script>
<style scoped></style>
