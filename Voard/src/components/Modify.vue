<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>글 수정</v-app-bar-title>
      <p>
        ooo님 반갑습니다
        <v-btn>로그아웃</v-btn>
      </p>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto mt-10" border>
          <v-row justify="center" align="center">
            <v-col cols="12" sm="8" md="6">
              <v-form>
                <v-card class="mx-auto mt-6">
                  <v-card-title>글 수정</v-card-title>
                  <v-card-text>
                    <v-text-field
                      variant="outlined"
                      label="제목"
                      type="text"
                      placeholder="제목"
                      required
                    ></v-text-field>
                    <v-textarea
                      variant="outlined"
                      label="내용"
                      type="text"
                      placeholder="내용"
                      required
                    ></v-textarea>
                  </v-card-text>
                </v-card>
              </v-form>
            </v-col>
          </v-row>
          <v-sheet class="text-center pt-6">
            <v-btn @click="btnCancel">취소</v-btn>
            <v-btn class="ml-2" color="primary" @click="btnModify">수정</v-btn>
          </v-sheet>
        </v-sheet>
      </v-container>
    </v-main>
    <v-footer app theme="dark">copyright &copy;Voard v1.0</v-footer>
  </v-app>
</template>

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
