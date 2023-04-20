<template>
  <h4>Component1</h4>
  <p>사용자 정의 컴포넌트</p>
</template>

<script>
export default {
  name: "Component1",
};
</script>

<!-- style에 scoped를 선언하면 해당 파일의 template 에서만 css가 적용된다 -->
<style scoped>
h4 {
  color: red;
}
</style>
