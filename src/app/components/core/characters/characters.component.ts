
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { ApiSvcService } from "src/app/services/api-svc.service";
import { SharedService } from "src/app/services/shared-service";
import { ToastService } from "src/app/shared/toast/toast-service";

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
    public toastService: ToastService,
  ) {}

  closeModal: string;
    searchQ: boolean = true;
  allCharacters$: Observable<any>;
  public page:number = 0;

  ngOnInit() {
    this.getAllCharactersPage(this.page);
  }
  cambiar(clickdata) {
    const charactersFav = JSON.parse(localStorage.getItem("TEAM_SELECTION"));

      if ( charactersFav == null ) {
        localStorage.setItem(
          "TEAM_SELECTION",
          JSON.stringify([clickdata])
        )
      } else {
        if (charactersFav.length < 6) {
          localStorage.setItem(
            "TEAM_SELECTION",
            JSON.stringify([...charactersFav, clickdata])
          )
          this.toastService.show('Heroe añadido', { classname: 'bg-success text-light', delay: 2000 });

        } else {
          this.toastService.show('Ya has completado 6 heroes', { classname: 'bg-danger text-light', delay: 5000 });
        }
        }



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



