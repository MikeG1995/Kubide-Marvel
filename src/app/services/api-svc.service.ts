import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiSvcService {
  publicKey= environment.public
  hash= environment.hash
  API = `https://gateway.marvel.com:443/v1/public/`;

  constructor(private http: HttpClient) { }

   getAllCharacters(): Observable<any> {
    return this.http.get<any>(this.API + `characters?orderBy=name&ts=1&apikey=${this.publicKey}&hash=${this.hash}`)
    .pipe(map((data: any) => data.data.results))
  }
  getCharacter(id:string): Observable<any> {
    return this.http.get<any>(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=${this.publicKey}&hash=${this.hash}`)
    .pipe(map((data: any) => data.data.results))
  }

}
