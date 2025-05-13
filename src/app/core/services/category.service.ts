import { Inject, Injectable } from '@angular/core';
import { Environments } from 'src/enviroments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from 'src/app/core/models/category';
import { PageDto } from 'src/app/core/models/pageDto';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl: string = Environments.apiUrl + 'category/';

  constructor(@Inject(HttpClient) private readonly http: HttpClient) {}

  getCategories(page: number, size: number, orderAsc: boolean): Observable<PageDto<Category>> {
    const params = {
      page: page.toString(),
      size: size.toString(),
      orderAsc: orderAsc.toString(),
      name: ''
    };

    return this.http.get<PageDto<Category>>(this.apiUrl, { params });
  }
}