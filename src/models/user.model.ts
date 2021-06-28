export enum UserRoleEnum {
  USER, ADMIN
}

export class User {

  constructor(
    public email: string,
    public firstname: string,
    public lastname: string,
    public createdAt: Date|null,
    public lastConnection: Date|null,
    public role: UserRoleEnum
  ) {}

  public static fromApi(userApi: any): User {
    return new User(
      userApi.email,
      userApi.firstname,
      userApi.lastname,
      userApi.createdAt,
      userApi.lastConnection,
      userApi.role
    );
  }
}