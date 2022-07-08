import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { hero } from "../models/hero";
import { ApiSvcService } from "./api-svc.service";


@Injectable()
export class CharacterResolver implements Resolve<any> {

  constructor( private character: ApiSvcService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<hero> {

    const id = route.paramMap.get("id");
    console.log(id)
    console.log(this.character.getCharacter(id));
    return this.character.getCharacter(id)
  }
}
