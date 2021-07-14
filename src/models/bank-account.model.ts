export class BankAccount {
  constructor(
    public id: string,
    public name: string,
    public bankName: string,
    public createdAt: Date|null,
    public updateAt: Date|null,
    public amount: number,
  ) {}

  public static fromApi(bankAccountApi: any): BankAccount {
    return new BankAccount(
      bankAccountApi.id,
      bankAccountApi.name,
      bankAccountApi.bankName,
      new Date(bankAccountApi.createdAt),
      new Date(bankAccountApi.updateAt),
      bankAccountApi.amount.toFixed(2)
    );
  }
}
