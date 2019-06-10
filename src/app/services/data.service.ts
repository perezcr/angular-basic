import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  // El scope del servicio es global -> toda la aplicación
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getPosts() {
    // Retorna un observable
    return this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .pipe(tap(console.log));
  }
}
