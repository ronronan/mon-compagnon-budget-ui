import { VueKeycloakInstance } from "@dsb-norge/vue-keycloak-js/dist/types";
import { User, UserRoleEnum } from "../models/user.model";

export interface IState {
  keycloak?: VueKeycloakInstance,
  authenticated: boolean,
  user: User,
  usersList: User[]
}

export const state: IState = {
  keycloak: undefined,
  user: new User('unknow', 'unknow@test.fr', 'unknow', 'unknow', null, null, 'https://randomuser.me/api/portraits/men/79.jpg', UserRoleEnum.USER),
  authenticated: false,
  usersList: []
};
