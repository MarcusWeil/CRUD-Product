import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { catchError, EMPTY, Observable } from 'rxjs';
import { Product } from './product.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    })
  }
  create(product: Product): Observable<Product> {
    // um objeto que vai fazer uma verificação de 'e'
    return this.http.post<Product>(this.baseUrl, product).pipe(map((obj) => obj), catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ops, um erro aconteceu', true)
    return EMPTY;
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }
  readById(id: string | null): Observable<Product> {
    const url = `${this.baseUrl}/${id}` //Guarda a informação da URL base setada lá em cima e concatenando com a ID do produto lido.
    return this.http.get<Product>(url).pipe(map((obj) => obj), catchError(e => this.errorHandler(e))
    ); //Faz a leitura baseada na informação guardada em URL
  }
  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product).pipe(map((obj) => obj), catchError(e => this.errorHandler(e))
    );
  }
  delete(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url).pipe(map((obj) => obj), catchError(e => this.errorHandler(e))
    );
  }
}

