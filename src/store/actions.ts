import { VueKeycloakInstance } from "@dsb-norge/vue-keycloak-js/dist/types";
import { ActionContext, ActionTree } from "vuex";
import { UserService } from "../services/user.service";
import { IState } from "./state";

export interface IActions extends ActionTree<IState, IState> {
  initKeycloak(context: ActionContext<IState, IState>, keycloak: VueKeycloakInstance): void;
  logIn(context: ActionContext<IState, IState>): void;
  logOut(context: ActionContext<IState, IState>): void;
  checkAndRegister(context: ActionContext<IState, IState>): void;

  loadUser(context: ActionContext<IState, IState>): void;
}

export const actions: IActions = {
  initKeycloak({ commit }, keycloak: VueKeycloakInstance) {
    commit('setKeycloak', keycloak);
    commit('setAuthenticated', keycloak.authenticated);
  },
  logIn({ getters }) {
    getters.getKeycloak.loginFn();
  },
  logOut({ getters }) {
    getters.getKeycloak.logoutFn();
  },
  async checkAndRegister({ commit }) {
    const user = await UserService.getInstance().checkAndRegister();
    commit('setUser', user);
  },
  async loadUser({ commit }) {
    const listUsers = await UserService.getInstance().findAll();
    commit('setListUsers', listUsers)
  }
}
