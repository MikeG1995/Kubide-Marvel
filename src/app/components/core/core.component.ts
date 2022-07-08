import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/services/shared-service';
import { ToastService } from 'src/app/services/toast/toast-service';
import { ApiSvcService } from 'src/app/services/api-svc.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
  encapsulation: ViewEncapsulation.None,


  providers: [NgbToast, SharedService],
})
export class CoreComponent implements OnInit {
  searchText: any = '';
  closeResult = '';
  @ViewChild('cookieWindow', { static: true }) public cookieWindow: any;

  constructor(
    private router: Router,
    public toastService: ToastService,
    _sharedService: SharedService,
    private modalService: NgbModal,
    private apiSvcService: ApiSvcService
  ) {
    _sharedService.changeEmitted$.subscribe((text) => {
      if (this.heroTeamProvisional.length < 6) {
        this.heroTeamProvisional.push(text);
        this.heroTeam.length = 0;
      } else {
        this.mostrar = true;
      }
    });
  }
  heroTeam: string[] = [];
  heroTeamProvisional: string[] = [];
  myHeroTeam: any[] = [];
  mostrar: boolean = false;
  ngOnInit(): void {

    if (
      JSON.parse(localStorage.getItem('TEAM_SELECTION')) != JSON.parse('null')
    )
      this.heroTeam = JSON.parse(localStorage.getItem('TEAM_SELECTION'));
      this.chargeSaveTeam()
  }

  updateSearch() {
    this.router.navigate(['search/', this.searchText]);
  }

  selectedHerosMenu() {
    this.chargeCurrentTeam();
    this.modalService.open(this.cookieWindow, {size: 'xl', backdropClass: 'light-blue-backdrop', windowClass: 'my-class'});

  }

  saveHeros_localStorage() {
    this.heroTeam = this.heroTeamProvisional
    let idHero = this.heroTeam;
    localStorage.setItem('TEAM_SELECTION', JSON.stringify(idHero));
  }
  deleteHero(id) {
    if (this.heroTeamProvisional != [] )
    this.heroTeamProvisional.forEach((value,index)=>{
        if(value == id) this.heroTeamProvisional.splice(index,1);
      });
    if (this.heroTeam != [] ) {
      const array = JSON.parse(localStorage.getItem("TEAM_SELECTION"));
      const filtered = array.filter(item => item !== (id));
      localStorage.setItem("TEAM_SELECTION", JSON.stringify(filtered));
      };
      this.modalService.dismissAll(this.cookieWindow);


}
clearMin() {
  this.heroTeamProvisional  = [];
  this.modalService.dismissAll(this.cookieWindow);

}
  clear() {
    localStorage.removeItem('TEAM_SELECTION');
    this.modalService.dismissAll(this.cookieWindow);
    this.heroTeam.length = 0;
    this.myHeroTeam.length = 0;
    this.heroTeamProvisional  = [];
    }


  windowTeam() {
    this.modalService.dismissAll(this.cookieWindow);
  }
  chargeSaveTeam() {
      this.myHeroTeam = [];
    this.heroTeam.map((data) => {
      this.apiSvcService.getCharacter(data).subscribe((heroe) => {
        this.myHeroTeam.push(heroe)
      });
    });

  }
  onSelect(charact:string){
    this.router.navigate(['character/', charact]);
    this.modalService.dismissAll(this.cookieWindow);
  }

  chargeCurrentTeam() {
    if (this.heroTeamProvisional.length > 0) {
      this.myHeroTeam = []
    };
    this.heroTeamProvisional.map((data) => {
      this.apiSvcService.getCharacter(data).subscribe((heroe) => {
        this.myHeroTeam.push(heroe)
      });
    });

  }
}
