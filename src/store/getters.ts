import { VueKeycloakInstance } from "@dsb-norge/vue-keycloak-js/dist/types";
import { GetterTree } from "vuex";
import { IState } from "./state";
import { User } from "../models/user.model";

export interface IGetters extends GetterTree<IState, IState> {
  getKeycloak(state: IState): VueKeycloakInstance;
  isUserAdmin(state: IState): boolean;
  isUserAuthenticated(state: IState): boolean;
}

export const getters: IGetters = {
  getKeycloak(state: IState): VueKeycloakInstance {
    if (state.keycloak === undefined) {
      throw new Error('Keycloak is null');
    }
    return state.keycloak;
  },
  isUserAdmin(state: IState): boolean {
    return User.ROLE_ADMIN === state.user.role;
  },
  isUserAuthenticated(state: IState): boolean {
    const keycloak = state.keycloak;
    if (keycloak !== null && keycloak !== undefined) {
      return keycloak.authenticated;
    }
    return false;
  }
}