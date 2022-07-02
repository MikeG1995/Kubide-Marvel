import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { hero } from "../models/hero";
import { ApiSvcService } from "./api-svc.service";


@Injectable()
export class searchResolver implements Resolve<any> {

  constructor( private character: ApiSvcService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<hero> {

    const search = route.paramMap.get("search")
    return this.character.getCharacterByName(search)
  }
}
