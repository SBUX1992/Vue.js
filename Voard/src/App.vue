<template>
  <router-view></router-view>
</template>

<script setup>
import axios from "axios";
import { onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import userStore from "./store/user";

const router = useRouter();

// 토큰이 남아있으면 localhost:3000 페이지에서 로그인 없이 바로 list로 넘어감
// 토큰이 없으면 로그인 화면으로
onBeforeMount(() => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken != null) {
    axios
      .get("http://localhost:8080/Voard/user/auth", {
        headers: { "X-AUTH-TOKEN": accessToken },
      })
      .then((response) => {
        console.log(response);
        const user = response.data.user;
        userStore.dispatch("setUser", user);

        router.push("/list");
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    router.push("/user/login");
  }
});
</script>
