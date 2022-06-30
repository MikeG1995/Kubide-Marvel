import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ApiSvcService } from "./api-svc.service";


@Injectable()
export class CharacterResolver implements Resolve<any> {

  constructor( private character: ApiSvcService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    const id = route.paramMap.get("characterSelected")
    return this.character.getCharacter(id)
  }
}
