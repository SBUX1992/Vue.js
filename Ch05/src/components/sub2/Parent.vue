<template>
  <h4>Parent</h4>
  <router-link to="/parent/child1">Child1</router-link> /
  <router-link to="/parent/child2">Child2</router-link>
  <!-- 라우터 출력을 위한 view 선언 -->
  <router-view></router-view>
</template>
<script>
export default {
  name: "Parent",
  stup() {
    return {};
  },
};
</script>
<style scoped></style>
