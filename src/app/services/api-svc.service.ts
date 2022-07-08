import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class ApiSvcService {
  publicKey= environment.public
  hash= environment.hash
  API = `https://gateway.marvel.com:443/v1/public/`;

  constructor(private http: HttpClient) { }

  getAllCharactersPage(page): Observable<hero> {
    return this.http.get<any>(this.API + `characters?&ts=1&apikey=${this.publicKey}&hash=${this.hash}`,{
      params:{
        orderBy:"name",
        limit:"9",
        offset: page
      }
    })
    .pipe(map((data: any) => data.data.results), shareReplay())
  };


  getCharacterByName(search:string): Observable<hero> {
    return this.http.get<any>(this.API + `characters?nameStartsWith=${search}&orderBy=name&ts=1&apikey=${this.publicKey}&hash=${this.hash}`).pipe(map((data: any) => data.data.results), shareReplay())
  };
  getCharacter(id:string): Observable<hero> {
    return this.http.get<any>(this.API + `characters/${id}?ts=1&apikey=${this.publicKey}&hash=${this.hash}`, {
      params: {
        id
      }
    }).pipe(map((data: any) => data.data.results["0"]), shareReplay())

  };
    getCharacterT(id:string): Observable<hero> {
    return this.http.get<any>(this.API + `characters/${id}?ts=1&apikey=${this.publicKey}&hash=${this.hash}`).pipe(map((data: any) => data.data.results["0"]))
  }

}
