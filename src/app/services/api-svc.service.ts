import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiSvcService {
  /*Esses dados a Marvel vai nos fornecer é importante */
  publicKey= environment.public
  hash= environment.hash
  API = `https://gateway.marvel.com:443/v1/public/characters?orderBy=name&ts=1&apikey=${this.publicKey}&hash=0acd14559197921b2bdd60203358fd10`;

  constructor(private http: HttpClient) { }

  /**com o metodo get vamos listar todos os personagens,
   *  lembre-se de ler a documentação da API para informar os dados
   * que você que no meu caso optei por characters */
 /** https://gateway.marvel.com/v1/public/characters/1012717?ts=1&apikey=231d33f521559ef3a301e935323773e4&hash=0acd14559197921b2bdd60203358fd10
*/
   getAllCharacters(): Observable<any> {
    return this.http.get<any>(this.API)
    .pipe(map((data: any) => data.data.results))
  }
  getCharacter(id:string): Observable<any> {
    return this.http.get<any>(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=${this.publicKey}&hash=0acd14559197921b2bdd60203358fd10`)
    .pipe(map((data: any) => data.data.results))
  }

}
