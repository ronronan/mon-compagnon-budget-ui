export enum UserRoleEnum {
  ADMIN, USER
}

export class User {

  constructor(
    public username: string,
    public email: string,
    public firstname: string,
    public lastname: string,
    public createdAt: Date|null,
    public lastConnection: Date|null,
    public picture: string,
    public role: UserRoleEnum
  ) {}

  public static fromApi(userApi: any): User {
    return new User(
      userApi.username,
      userApi.email,
      userApi.firstname,
      userApi.lastname,
      userApi.createdAt,
      userApi.lastConnection,
      userApi.picture,
      userApi.role
    );
  }
}