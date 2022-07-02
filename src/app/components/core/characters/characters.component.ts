
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { map, Observable } from "rxjs";
import { ApiSvcService } from "src/app/services/api-svc.service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  constructor(
    private router: Router,
    private characterSvc: ApiSvcService
  ) {}

  allCharacters$: Observable<any>;

  ngOnInit() {
  this.getCharacters();
  }

  onSelect(charact:string){
    this.router.navigate(['character/', charact]);
  }

  getCharacters() {
    this.allCharacters$ = this.characterSvc.getAllCharacters();
  }

}
