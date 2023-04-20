<template>
  <h3>Ch03.Component 실습</h3>

  <h4>1)컴포넌트 기본</h4>
  <Component1 />
  <Component2></Component2>
  <Parent></Parent>
  <hr />

  <!-- API는 기능을 갖는 옵션 -->
  <h4>2)컴포넌트 Option API</h4>
  <!-- 컴포넌트에서 사용할 data(상대값) 선언하는 API -->
  <MyComponent1></MyComponent1>
  <!-- 화면 이벤트 처리와 로직 제어에 관련 함수를 정의하는 API -->
  <MyComponent2></MyComponent2>
  <!-- 컴포트 상태값이 업데이트가 되면 자동으로 다시 계산하는 API -->
  <MyComponent3></MyComponent3>
  <!-- 상태값 데이터 변화를 감지해서 특정 로직을 수행하는 API -->
  <MyComponent4></MyComponent4>
  <hr />

  <h4>3)컴포넌트 통신(데이터 교환)</h4>
  <UComponent1 v-bind:name="name"></UComponent1>
  <UComponent1 :name="name" :age="age"></UComponent1>
  <ul>
    <UComponent2 v-for="city in cities" v-bind:city="city"></UComponent2>
  </ul>
  <UComponent3 v-bind:c3Name="name" :c3Age="age"></UComponent3>
  <UComponent5 v-on:myShow="printValue"></UComponent5>
  <p v-if="value1 && value2">
    이름 : {{ value1 }}<br />
    나이 : {{ value2 }}<br />
  </p>
  <hr />

  <h4>4)컴포넌트 생명주기</h4>
  <NewComponent v-if="isShow" />
  <button @click="btnStatusToggle">컴포넌트 {{ status }}</button>
  <hr />
</template>

<script>
/**
 * 날짜 : 2023-04-05
 * 이름 : 강중현
 * 내용 : Ch03.Component
 *
 * Component
 *  - 화면 구성요소를 독립적인 모듈형태로 구성하기 위한 요소
 *  - SFC 구조(template, script, style)를 이용한 컴포넌트 구성
 *  - Options API를 이용한 컴포넌트 기능 구현
 *
 */

// 1)컴포넌트 기본
import Component1 from "./components/Component1.vue";
import Component2 from "./components/Component2.vue";
import Parent from "./components/sub1/Parent.vue";
// Child는 Parent에서 선언하였음

// 2)컴포넌트 Option API
import MyComponent1 from "./components/sub2/MyComponent1.vue";
import MyComponent2 from "./components/sub2/MyComponent2.vue";
import MyComponent3 from "./components/sub2/MyComponent3.vue";
import MyComponent4 from "./components/sub2/MyComponent4.vue";

// 3)컴포넌트 통신(데이터 교환)
import UComponent1 from "./components/sub3/UComponent1.vue";
import UComponent2 from "./components/sub3/UComponent2.vue";
import UComponent3 from "./components/sub3/UComponent3.vue";
// UComponent4는 UComponent3에서 선언하였음
import UComponent5 from "./components/sub3/UComponent5.vue";

// 4)컴포넌트 생명주기
import NewComponent from "./components/sub4/NewComponent.vue";
export default {
  name: "App",

  // 3)컴포넌트 통신(데이터 교환)
  data() {
    return {
      name: "홍길동",
      age: 21,
      cities: ["서울", "대전", "대구", "부산", "광주"],
      value1: "",
      value2: 0,
      status: "제거",
      isShow: true,
    };
  },

  // 2)컴포넌트 Option API
  components: {
    Component1,
    Component2,
    //sub1
    Parent,
    // Child는 Parent 파일에 선언되어있음
    // sub2
    MyComponent1,
    MyComponent2,
    MyComponent3,
    MyComponent4,
    // sub3
    UComponent1,
    UComponent2,
    UComponent3,
    UComponent5,
    // sub4
    NewComponent,
  },
  methods: {
    // 3)컴포넌트 통신(데이터 교환) - UComponent5
    printValue: function (data) {
      this.value1 = data.name;
      this.value2 = data.age;
    },
    // 4)컴포넌트 생명주기
    btnStatusToggle: function () {
      if (this.isShow) {
        this.isShow = false;
        this.status = "생성";
      } else {
        this.isShow = true;
        this.status = "제거";
      }
    },
  },
};
</script>

<!-- 
  template에 <Component1 />을 넣어주고
  script에 import 넣어주고 export default에 선언하면 당겨와짐
 -->
<!--
  1. vueinit 하면 기본틀 자동완성
  2. <파일명Vue 하면 하위 파일인 파일 내용 자동 입력 됨
-->
