<template>
  <h4>로그인 성공</h4>
  <p>
    <!-- nick -->
    {{ user.nick }}님 반갑습니다.<br />
    <a href="#" @click.prevent="logout">로그아웃</a>
  </p>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";

const router = useRouter();
const store = useStore();

// 닉네임 가져오기 위해 선언
const user = computed(() => {
  return store.getters.getUser;
});
const logout = () => {
  localStorage.removeItem("accessToken");
  router.push("/user2/jwt/loginForm");
};
</script>
<style scoped></style>
