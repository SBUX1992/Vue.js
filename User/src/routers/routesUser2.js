import User2Main from "../components/user2/User2Main.vue";
import User2List from "../components/user2/User2List.vue";
import User2Register from "../components/user2/User2Register.vue";
import User2Modify from "../components/user2/User2Modify.vue";

import JwtComponent from "../components/user2/JwtComponent.vue";
import LoginForm from "../components/user2/LoginForm.vue";
import LoginSuccess from "../components/user2/LoginSuccess.vue";

const routes = [
  {
    path: "/user2",
    name: "User2Main",
    component: User2Main,
    children: [
      { path: "", component: User2Register },
      { path: "register", component: User2Register },
      { path: "list", component: User2List },
      {
        path: "modify",
        name: "User2Modify",
        component: User2Modify,
        props: true,
      },
      {
        path: "jwt",
        component: JwtComponent,
        children: [
          { path: "", component: LoginForm },
          { path: "loginForm", component: LoginForm },
          { path: "loginSuccess", component: LoginSuccess },
        ],
      },
    ],
  },
];

export default routes;
