
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
  public page:number = 0;

  ngOnInit() {
  this.getAllCharactersPage(this.page);
  }

  onSelect(charact:string){
    this.router.navigate(['character/', charact]);
  }

  getAllCharactersPage(page) {
    this.allCharacters$ = this.characterSvc.getAllCharactersPage(page);
  }
  next() {
    console.log("next");
    this.getAllCharactersPage(this.page += 9)

  }
   prev() {
    console.log("prev");
    if (this.page > 0) this.getAllCharactersPage(this.page -= 9)
    }

  }


