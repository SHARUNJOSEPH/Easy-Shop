import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private https: HttpClient) {}
  getProduct() {
    return this.https.get<any>('https://fakestoreapi.com/products').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
