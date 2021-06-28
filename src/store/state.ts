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
  user: new User('unknow@test.fr', 'unknow', 'unknow', null, null, UserRoleEnum.USER),
  authenticated: false,
  usersList: []
};
