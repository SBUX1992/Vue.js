/**
 * Vuex 전역 스토어 설정
 */
import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    user1: null,
    user2: null,
    user3: null,
    user4: null,
    user5: null,
    user6: null,
    user7: null,
    // 로그인
    user: null,
  },
  mutations: {
    SET_USER1: (state, data) => (state.user1 = data),
    SET_USER2: (state, data) => (state.user2 = data),
    SET_USER3: (state, data) => (state.user3 = data),
    SET_USER4: (state, data) => (state.user4 = data),
    SET_USER5: (state, data) => (state.user5 = data),
    SET_USER6: (state, data) => (state.user6 = data),
    SET_USER7: (state, data) => (state.user7 = data),
    // 로그인
    SET_USER: function (state, data) {
      state.user = data;
    },
  },
  actions: {
    setUser1: (context, data) => context.commit("SET_USER1", data),
    setUser2: (context, data) => context.commit("SET_USER2", data),
    setUser3: (context, data) => context.commit("SET_USER3", data),
    setUser4: (context, data) => context.commit("SET_USER4", data),
    setUser5: (context, data) => context.commit("SET_USER5", data),
    setUser6: (context, data) => context.commit("SET_USER6", data),
    setUser7: (context, data) => context.commit("SET_USER7", data),
    // 로그인
    setUser: function (context, data) {
      context.commit("SET_USER", data);
    },
    authUser: function (context, token) {
      return axios
        .get("http://localhost:8080/Voard/user/auth", {
          headers: { "X-AUTH-TOKEN": token },
        })
        .then((response) => {
          console.log(response);
          const user = response.data.user;

          // 사용자 객체 저장(State)
          context.commit("SET_USER", user);
        })
        .catch((error) => {
          console.log(error);
          throw error;
        });
    },

    login: function (context, user) {
      return axios
        .post("http://localhost:8080/Voard/user/login", user)
        .then((response) => {
          console.log(response);
          const token = response.data.accessToken;
          const user = response.data.user;

          // accessToken 저장(Cookie)
          localStorage.setItem("accessToken", token);

          // 사용자 객체 저장(State)
          context.commit("SET_USER", user);
        })
        .catch((error) => {
          console.log(error);
          // 선언해줘야 LoginForm에서 catch가 실행됨
          throw error;
        });
    },
  },
  getters: {
    getUser1: (state) => state.user1,
    getUser2: (state) => state.user2,
    getUser3: (state) => state.user3,
    getUser4: (state) => state.user4,
    getUser5: (state) => state.user5,
    getUser6: (state) => state.user6,
    getUser7: (state) => state.user7,
    // 로그인
    getUser: function (state) {
      return state.user;
    },
  },
});

// store 내보내기 -> main.js 등록 설정
export default store;
