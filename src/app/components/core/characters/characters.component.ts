
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { ApiSvcService } from "src/app/services/api-svc.service";
import { SharedService } from "src/app/services/shared-service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {

  @Output() cambio = new EventEmitter();


  constructor(
    private router: Router,
    private characterSvc: ApiSvcService,
    private _sharedService: SharedService,
  ) {}

  closeModal: string;

  allCharacters$: Observable<any>;
  public page:number = 0;

  ngOnInit() {
    this.getAllCharactersPage(this.page);
  }
  cambiar(clickdata) {
    console.log(clickdata);
    this._sharedService.emitChange(clickdata);
  }
  onSelect(charact:string){
    this.router.navigate(['character/', charact]);
  }
  getAllCharactersPage(page) {
    this.allCharacters$ = this.characterSvc.getAllCharactersPage(page);
    console.log(this.allCharacters$);
    this.allCharacters$.subscribe(data => { console.log(data)})
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



