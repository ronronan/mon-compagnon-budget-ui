export class User {
  public static ROLE_ADMIN = 'ADMIN';
  public static ROLE_USER = 'USER';

  constructor(
    public username: string,
    public email: string,
    public firstname: string,
    public lastname: string,
    public createdAt: Date|null,
    public lastConnection: Date|null,
    public picture: string,
    public role: string
  ) {}

  public static fromApi(userApi: any): User {
    return new User(
      userApi.username,
      userApi.email,
      userApi.firstname,
      userApi.lastname,
      userApi.createdAt,
      new Date(userApi.lastConnection),
      userApi.picture,
      userApi.role
    );
  }
}
