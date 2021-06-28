import { VueKeycloakInstance } from "@dsb-norge/vue-keycloak-js/dist/types";
import { GetterTree } from "vuex";
import { IState } from "./state";

export interface IGetters extends GetterTree<IState, IState> {
  getKeycloak(state: IState): VueKeycloakInstance;
}

export const getters: IGetters = {
  getKeycloak(state: IState): VueKeycloakInstance {
    if (state.keycloak === undefined) {
      throw new Error('Keycloak is null');
    }
    return state.keycloak;
  }
}