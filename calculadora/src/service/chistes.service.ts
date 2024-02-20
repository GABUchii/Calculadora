import { Injectable } from '@angular/core';
import { enviroment } from '../environment.api.ts/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChistesService {
  apiUrl = enviroment.API_URL;
  randomPath = 'random';




  constructor(private http: HttpClient) { }

  getChistes(): Observable<any> {
    return this.http.get(this.apiUrl + this.randomPath);


  }

  obtenerCategory():Observable<any>{
    const url = `${this.apiUrl}/categories`;
    return this.http.get<string[]>(url);
  }

buscarChistes(query:string): Observable<any>{
  const url = `${this.apiUrl}/search?query=${query}`;
 return this.http.get<any>(url);
}

}
