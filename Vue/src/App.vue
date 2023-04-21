<template>
  <!-- https://morioh.com/p/85367b1a680b -->
  <h3>계산기</h3>

  <div>
    <div></div>
    <form>
      <div>
        <button type="button">ac</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button">/</button>
      </div>
      <div>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button">*</button>
      </div>
      <div>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button">-</button>
      </div>
      <div>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button">+</button>
      </div>
      <div>
        <button type="button" class="zero">0</button>
        <button type="button">.</button>
        <button type="submit">=</button>
      </div>
    </form>
  </div>
</template>

<script setup></script>

<style scoped>
button {
  width: 50px;
  height: 50px;
  margin: 5px;
}
.zero {
  width: 110px;
}
</style>
