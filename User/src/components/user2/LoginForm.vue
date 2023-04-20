<template>
  <h4>로그인</h4>
  <form @submit.prevent="loginProc">
    <table border="1">
      <tr>
        <td>아이디</td>
        <td><input type="text" v-model="user.uid" /></td>
      </tr>
      <tr>
        <td>비밀번호</td>
        <td><input type="password" v-model="user.pass" /></td>
      </tr>
      <tr>
        <td colspan="2" align="right">
          <input type="submit" value="로그인" />
        </td>
      </tr>
    </table>
  </form>
</template>

<script setup>
// 2
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { reactive } from "vue";
import axios from "axios";

const router = useRouter();
const store = useStore(); // vuex

// 1
const user = reactive({
  uid: "", // 상단의 user.uid가 바인딩 됨
  pass: "", // 상단의 user.pass가 바인딩 됨
});

const loginProc = function () {
  // 로그인 요청
  // store.dispatch("login", user); 이후 리턴을 위해서 .then().catch()를 추가시킴
  // 로그인 성공이면 then
  // 로그인 실패면 catch
  store
    .dispatch("login", user)
    .then((response) => {
      // 로그인 성공 전환
      router.push("/jwt/loginSuccess");
    })
    .catch((error) => {
      // 로그인 실패
      alert("로그인 실패!");
    });

  // 로그인 성공 전환
};
</script>

<style scoped></style>
