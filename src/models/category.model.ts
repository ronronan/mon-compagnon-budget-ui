export class Category {

  constructor(
    public id: number,
    public name: string,
    public color: string,
    public icon: string,
    public parentId: number
  ) {}

  public static fromApi(categoryApi: any): Category {
    return new Category(
      categoryApi.id,
      categoryApi.name,
      categoryApi.color,
      categoryApi.icon,
      categoryApi.parentId
    );
  }
}
