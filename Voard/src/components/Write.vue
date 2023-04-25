<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>글쓰기</v-app-bar-title>
      <p>
        ooo님 반갑습니다
        <v-btn>로그아웃</v-btn>
      </p>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto mt-10" border>
          <v-table>
            <tbody>
              <tr>
                <th>제목</th>
                <td>
                  <v-text-field
                    class="mt-10"
                    variant="outlined"
                    placeholder="제목"
                  ></v-text-field>
                </td>
              </tr>

              <tr>
                <th>내용</th>
                <td>
                  <v-text-field
                    class="mt-10"
                    variant="outlined"
                    hide-details="true"
                    placeholder="내용을 입력해 주세요"
                  ></v-text-field>
                </td>
              </tr>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    class="mt-10"
                    variant="outlined"
                    hide-details="true"
                    placeholder="댓글을 입력해 주세요"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-btn color="success">등록</v-btn>
                </v-col>
              </v-row>
            </tbody>
          </v-table>
          <v-sheet class="text-center pt-6">
            <v-btn @click="btnCancel">취소</v-btn>
            <v-btn class="ml-2" color="primary" @click="btnWrite">등록</v-btn>
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
const btnWrite = () => {
  router.push("/list");
};
</script>
<style scoped></style>
