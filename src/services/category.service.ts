import { AxiosStatic } from 'axios';
import { Category } from '../models/category.model';
import { ApiService } from './api.service';

export class CategoryService extends ApiService {
  private static instanceChild: CategoryService;

  protected constructor(axiosInstance: AxiosStatic) {
    super(axiosInstance);
  }

  public static getInstance(): CategoryService {
    if (!CategoryService.instanceChild) {
      CategoryService.instanceChild = new CategoryService(ApiService.axiosInstance);
    }

    return CategoryService.instanceChild;
  }

  public findAll(): Promise<Category[]> {
    return new Promise((resolve, rejet) => {
      this.httpGet('/api/v1/category').then((categoryList: any) => {
        const listCategory: Category[] = [];
        for(const category of categoryList) {
          listCategory.push(Category.fromApi(category));
        }
        resolve(listCategory);
      }).catch(rejet);
    });
  }

  public addCategory(): Promise<Category> {
    return new Promise((resolve, rejet) => {
      this.httpPost('/api/v1/category').then((categoryApi: any) => {
        resolve(Category.fromApi(categoryApi));
      }).catch(rejet);
    });
  }

}