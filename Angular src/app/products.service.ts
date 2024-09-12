import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'http://localhost:3000/products';

  constructor(private client:HttpClient) { }

  getAllProducts(){
    return this.client.get("http://localhost:3000/products")

  }

  getProductById(id: string): Observable<any> {
    return this.client.get<any>(`${this.apiUrl}/${id}`);
  }

  
}
