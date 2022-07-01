
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ApiSvcService } from "src/app/services/api-svc.service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  constructor(
 private characterSvc: ApiSvcService
  ) {}

  allCharacters$: Observable<any>;

  ngOnInit() {


  this.getCharacters();
    console.log(this.getCharacters())
  }



  getCharacters() {
    this.allCharacters$ = this.characterSvc.getAllCharacters();
  }

}
