import { VueKeycloakInstance } from "@dsb-norge/vue-keycloak-js/dist/types";
import { MutationTree } from "vuex";
import { User } from "../models/user.model";
import { BankAccount } from "../models/bank-account.model";
import { IState } from "./state";

export interface IMutation extends MutationTree<IState> {
  setKeycloak(state: IState, keycloak: VueKeycloakInstance): void;
  setUser(state: IState, user: User): void;
  setListUsers(state: IState, listUsers: User[]): void;
  setListBankAccount(state: IState, listBankAccount: BankAccount[]): void;
}

export const mutations: IMutation = {
  setKeycloak(state: IState, keycloak: VueKeycloakInstance) {
    state.keycloak = keycloak;
  },
  setUser(state: IState, user: User) {
    state.user = user;
  },
  setListUsers(state: IState, listUsers: User[]) {
    state.usersList = listUsers;
  },
  setListBankAccount(state: IState, listBankAccount: BankAccount[]) {
    state.bankAccountList = listBankAccount;
  }
}
