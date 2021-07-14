import { VueKeycloakInstance } from "@dsb-norge/vue-keycloak-js/dist/types";
import { MutationTree } from "vuex";
import { User } from "../models/user.model";
import { IState } from "./state";

export interface IMutation extends MutationTree<IState> {
  setKeycloak(state: IState, keycloak: VueKeycloakInstance): void;
  setUser(state: IState, userApi: any): void;
  setListUsers(state: IState, listUsers: any): void;
}

export const mutations: IMutation = {
  setKeycloak(state: IState, keycloak: VueKeycloakInstance) {
    state.keycloak = keycloak;
  },
  setUser(state: IState, userApi: User) {
    state.user = userApi
  },
  setListUsers(state: IState, listUsers: User[]) {
    state.usersList = listUsers
  }
}
