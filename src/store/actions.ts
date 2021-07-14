import { VueKeycloakInstance } from "@dsb-norge/vue-keycloak-js/dist/types";
import { ActionContext, ActionTree } from "vuex";
import { UserService } from "../services/user.service";
import { IState } from "./state";
import {NavigationGuardNext, RouteLocationNormalized, Router, RouteRecordNormalized} from "vue-router";

export interface IActions extends ActionTree<IState, IState> {
  initKeycloak(context: ActionContext<IState, IState>, keycloak: VueKeycloakInstance): void;
  initRouter(context: ActionContext<IState, IState>, router: Router): void;
  logIn(context: ActionContext<IState, IState>): void;
  logOut(context: ActionContext<IState, IState>): void;
  checkAndRegister(context: ActionContext<IState, IState>): void;
  checkInitRoute(context: ActionContext<IState, IState>, router: Router): void;
  loadUser(context: ActionContext<IState, IState>): void;
}

export const actions: IActions = {
  initKeycloak({ commit }, keycloak: VueKeycloakInstance) {
    commit('setKeycloak', keycloak);
  },
  initRouter({ getters }, router: Router) {
    router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
      if (to.matched.some((record: RouteRecordNormalized) => record.meta.requireBeAdmin)) {
        if (getters.isUserAuthenticated) {
          if (getters.isUserAdmin) {
            next();
          } else {
            alert("Vous n'avez pas les droits nécessaires pour aller dans des pages dédiés au rôle ADMIN");
          }
        } else {
          alert("Vous n'êtes pas authentifier");
          next("/");
        }
      } else {
        next();
      }
    });
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
  checkInitRoute({ getters }, router: Router) {
    if (router.currentRoute.value.meta.requireBeAdmin && !getters.isUserAdmin) {
      router.push("/").then();
    }
  },
  async loadUser({ commit }) {
    const listUsers = await UserService.getInstance().findAll();
    commit('setListUsers', listUsers)
  }
}
