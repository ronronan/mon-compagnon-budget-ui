import {VueKeycloakInstance} from "@dsb-norge/vue-keycloak-js/dist/types";
import {User} from "../models/user.model";
import {BankAccount} from "../models/bank-account.model";

export interface IState {
  keycloak?: VueKeycloakInstance,
  user: User,
  usersList: User[],
  bankAccountList: BankAccount[]
}

export const state: IState = {
  keycloak: undefined,
  user: new User(0, 'unknown', 'unknow@test.fr', 'unknown', 'unknown', null, null, 'https://randomuser.me/api/portraits/men/79.jpg', User.ROLE_USER),
  usersList: [],
  bankAccountList: []
};
