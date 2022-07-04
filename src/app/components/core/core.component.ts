import { Component, ElementRef, OnDestroy, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/services/shared-service';
import { ToastService } from 'src/app/services/toast/toast-service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
  providers: [NgbToast, SharedService]
})
export class CoreComponent implements OnInit {
  searchText:any = '';
  closeResult = '';
  @ViewChild ('cookieWindow', { static: true }) public cookieWindow: any;

  constructor( private router: Router,private moldalAlert: NgbToast, public toastService: ToastService, private _sharedService: SharedService,
    private modalService: NgbModal
    ) {
    _sharedService.changeEmitted$.subscribe(text => {
        console.log(text);
        if (this.heroTeam.length < 6) {
          this.heroTeam.push(text)
          console.log(this.heroTeam)
        } else {
          this.mostrar = true
        }

    });
}
  heroTeam:any | null = [];
  CharId: string;
  toasts: any[] = [];
  mostrar:boolean=false;
  asker = JSON.parse(localStorage.getItem("TEAM_SELECTION"))
  ngOnInit(): void {

     if (JSON.parse(localStorage.getItem("TEAM_SELECTION")) != JSON.parse("null"))
     this.heroTeam = JSON.parse(localStorage.getItem("TEAM_SELECTION")),
     console.log(JSON.parse(localStorage.getItem("TEAM_SELECTION")));
    }

  updateSearch() {
    console.log(this.searchText);
    this.router.navigate(['search/', this.searchText]);

  }

  selectedHerosMenu(){
    this.modalService.open(this.cookieWindow)
  }

  listHeros_localStorage () {
    let idHero = this.heroTeam;
    localStorage.setItem("TEAM_SELECTION", JSON.stringify(idHero))
  }

  clear() {
    console.log("clear");
    localStorage.removeItem("TEAM_SELECTION");
    this.modalService.dismissAll(this.cookieWindow);
    this.heroTeam.length = 0;
  }
  gcook() {
    this.modalService.dismissAll(this.cookieWindow);
  }

}
