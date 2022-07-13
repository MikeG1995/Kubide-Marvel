import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map, Observable } from 'rxjs';
import { ToastService } from 'src/app/shared/toast/toast-service';

@Component({
  selector: 'app-search',
  templateUrl: '../characters/characters.component.html',
  styleUrls: ['../characters/characters.component.scss']
})
export class SearchComponent implements OnInit {
  public page:number = 0;
  @ViewChild ('cookieWindow', { static: true }) public cookieWindow: any;



  constructor(
    private route: ActivatedRoute, private router:Router,    private modalService: NgbModal,     public toastService: ToastService,


     ) {}
     searchQ: boolean = false;

     allCharacters$: Observable<any>;

     ngOnInit(): void {
      this.allCharacters$ = this.route.data.pipe(map(data=> data["search"])), this.page
      console.log(this.allCharacters$)
    }
    next() {

    }
    prev() {

    }

    selectedHerosMenu(){
      this.modalService.open(this.cookieWindow)
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

     }
