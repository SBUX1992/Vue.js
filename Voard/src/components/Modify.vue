<template></template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const btnCancel = () => {
  router.push("/list");
};
const btnModify = () => {
  router.push("/list");
};
</script>
<style scoped></style>
