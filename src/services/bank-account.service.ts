import {AxiosStatic} from 'axios';
import {ApiService} from './api.service';
import {BankAccount} from "../models/bank-account.model";

export class BankAccountService extends ApiService {
  private static instanceChild: BankAccountService;

  protected constructor(axiosInstance: AxiosStatic) {
    super(axiosInstance);
  }

  public static getInstance(): BankAccountService {
    if (!BankAccountService.instanceChild) {
      BankAccountService.instanceChild = new BankAccountService(ApiService.axiosInstance);
    }

    return BankAccountService.instanceChild;
  }

  public findAccountsByUser(userId: number): Promise<BankAccount[]> {
    return new Promise((resolve, rejet) => {
      this.httpGet(`api/v1/bank-account/${userId}`).then((bankAccountList: any) => {
        const listBankAccount: BankAccount[] = [];
        for(const bankAccount of bankAccountList) {
          listBankAccount.push(BankAccount.fromApi(bankAccount));
        }
        resolve(listBankAccount);
      }).catch(rejet);
    });
  }

  public createBackAccount(userId: number, bankAccount: BankAccount): Promise<void> {
    return new Promise((resolve, rejet) => {
      this.httpPost(`/api/v1/bank-account/${userId}`, { params: bankAccount })
        .then(() => resolve())
        .catch(rejet);
    });
  }

  public updateAmountBankAccount(bankAccountUpdated: BankAccount): Promise<void> {
    return new Promise((resolve, rejet) => {
      this.httpPut(`/api/v1/bank-account/amount`, { params: bankAccountUpdated })
        .then(() => resolve())
        .catch(rejet);
    });
  }

}