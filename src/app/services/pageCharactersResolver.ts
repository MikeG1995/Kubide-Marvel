import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { hero } from "../models/hero";
import { ApiSvcService } from "./api-svc.service";


@Injectable()
export class pageCharactersResolver implements Resolve<any> {

  constructor( private character: ApiSvcService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<hero> {

    const page = route.paramMap.get("page")

    return this.character.getAllCharactersPage(page)
  }
}
