<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>글쓰기</v-app-bar-title>
      <v-btn @click="btnLogout">로그아웃</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto">
          <v-text-field
            label="제목입력"
            variant="outlined"
            v-model="article.title"
          ></v-text-field>
          <v-textarea
            label="내용입력"
            variant="outlined"
            rows="12"
            v-model="article.content"
          ></v-textarea>
          <v-file-input label="파일첨부" variant="outlined"></v-file-input>
          <v-sheet class="text-right">
            <v-btn @click="btnCancel">취소</v-btn>
            <v-btn color="primary" @click="btnModify" class="ml-2"
              >글 수정</v-btn
            >
          </v-sheet>
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const btnCancel = () => {
  router.push("/list");
};
</script>
<style scoped></style>
