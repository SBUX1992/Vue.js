import { createStore } from "vuex";

const store = createStore({
  state: {
    todos: [],
  },
  mutations: {
    // todo 추가(등록)
    ADD_TODO(state, todo) {
      state.todos.push(todo);
    },
    // 개별 삭제
    REMOVE_TODO(state, index) {
      state.todos.splice(index, 1);
    },
    // 전체삭제
    CLEAR_TODO(state) {
      state.todos = [];
    },
  },
  actions: {
    // todo 추가(등록)
    addTodo(context, todo) {
      context.commit("ADD_TODO", todo);
    },
    // 개별 삭제
    removeTodo(context, index) {
      context.commit("REMOVE_TODO", index);
    },
    // 전체삭제
    clearTodo(context) {
      context.commit("CLEAR_TODO");
    },
  },
  getters: {
    todos(state) {
      return state.todos;
    },
  },
});

export default store;
