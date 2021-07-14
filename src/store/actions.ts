import { VueKeycloakInstance } from "@dsb-norge/vue-keycloak-js/dist/types";
import { ActionContext, ActionTree } from "vuex";
import { UserService } from "../services/user.service";
import { BankAccountService } from "../services/bank-account.service";
import { IState } from "./state";
import {NavigationGuardNext, RouteLocationNormalized, Router, RouteRecordNormalized} from "vue-router";
import {BankAccount} from "../models/bank-account.model";

export interface IActions extends ActionTree<IState, IState> {
  initKeycloak(context: ActionContext<IState, IState>, keycloak: VueKeycloakInstance): void;
  initRouter(context: ActionContext<IState, IState>, router: Router): void;
  logIn(context: ActionContext<IState, IState>): void;
  logOut(context: ActionContext<IState, IState>): void;
  checkAndRegister(context: ActionContext<IState, IState>): void;
  checkInitRoute(context: ActionContext<IState, IState>, router: Router): void;
  loadUser(context: ActionContext<IState, IState>): void;
  loadBankAccountByUser(context: ActionContext<IState, IState>): void;
  saveBankAccount(context: ActionContext<IState, IState>, payload: any): Promise<void>;
  updateAmountBankAccount(context: ActionContext<IState, IState>, payload: any): Promise<void>;
}

export const actions: IActions = {
  initKeycloak({ commit }, keycloak: VueKeycloakInstance) {
    commit('setKeycloak', keycloak);
  },
  initRouter({ getters }, router: Router) {
    router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
      if (to.matched.some((record: RouteRecordNormalized) => record.meta.requireBeAdmin)) {
        if (getters.isUserAdmin) {
          next();
        } else {
          alert("Vous n'avez pas les droits nécessaires pour aller dans des pages dédiés au rôle ADMIN");
          next("/");
        }
      } else if(to.matched.some((record: RouteRecordNormalized) => record.meta.requireBeAuthenticated)) {
        if (getters.isUserAuthenticated) {
          next();
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
    } else {
      router.push(router.currentRoute.value.path).then();
    }
  },
  async loadUser({ commit }) {
    const listUsers = await UserService.getInstance().findAll();
    commit('setListUsers', listUsers)
  },
  async loadBankAccountByUser({ commit, state }) {
    const listBankAccount = await BankAccountService.getInstance().findAccountsByUser(state.user.id);
    commit('setListBankAccount', listBankAccount);
  },
  saveBankAccount({ state }, payload: any): Promise<void> {
    return new Promise((resolve, reject) => {
      const bankAccount = new BankAccount(0, payload.name, payload.bankName, null, null, payload.amount);
      return BankAccountService.getInstance().createBackAccount(state.user.id, bankAccount).then(() => resolve()).catch(reject);
    })
  },
  updateAmountBankAccount(context: ActionContext<IState, IState>, payload: any): Promise<void> {
    return new Promise((resolve, reject) => {
      return BankAccountService.getInstance().updateAmountBankAccount(payload).then(() => resolve()).catch(reject);
    })
  }
}
