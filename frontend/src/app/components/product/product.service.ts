import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }
  readById(id: string | null): Observable<Product> {
    const url = `${this.baseUrl}/${id}` //Guarda a informação da URL base setada lá em cima e concatenando com a ID do produto lido.
    return this.http.get<Product>(url) //Faz a leitura baseada na informação guardada em URL
  }
  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product)
  }
}

