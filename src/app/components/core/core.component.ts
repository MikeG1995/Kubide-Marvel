import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/services/shared-service';
import { ToastService } from 'src/app/shared/toast/toast-service';
import { ApiSvcService } from 'src/app/services/api-svc.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
  encapsulation: ViewEncapsulation.None,


  providers: [SharedService],
})
export class CoreComponent implements OnInit, OnDestroy {
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


  }
  heroTeam: string[] = [];
  myHeroTeam: any[] = [];
  titleTeam: String = "Nombra tu equipo";
  ngOnInit(): void {

    if (
      JSON.parse(localStorage.getItem('TEAM_SELECTION')) != JSON.parse('null')
    )
      {
        this.heroTeam = JSON.parse(localStorage.getItem('TEAM_SELECTION'));
        this.chargeSaveTeam()
      };
      if (
        JSON.parse(localStorage.getItem('TEAM_NAME')) != JSON.parse('null')
      ) {
        this.titleTeam = JSON.parse(localStorage.getItem('TEAM_NAME'));
      }

  }
  ngOnDestroy(): void {
    this.toastService.clear();
  }
  onKey(event) {
    const inputValue = event.target.value;
    this.titleTeam = inputValue
}
  updateSearch() {
    this.router.navigate(['search/', this.searchText]);
  }

  selectedHerosMenu() {

    this.myHeroTeam = [];
    this.chargeSaveTeam();
    this.modalService.open(this.cookieWindow, {size: 'xl', backdropClass: 'light-blue-backdrop', windowClass: 'my-class'});



  }

  saveHeros_localStorage() {
    if (this.titleTeam != "Nombra tu equipo") {
      localStorage.setItem('TEAM_NAME', JSON.stringify(this.titleTeam))
      this.toastService.show('Guardado', { classname: 'bg-success text-light', delay: 3000 });

  }

  }

  deleteHero(id) {

      const array = JSON.parse(localStorage.getItem("TEAM_SELECTION"));
      const filtered = array.filter(item => item !== (id));
      localStorage.setItem("TEAM_SELECTION", JSON.stringify(filtered))
      this.modalService.dismissAll(this.cookieWindow);
      this.toastService.show('Héroe borrado');

  }

  windowTeam() {
    this.modalService.dismissAll(this.cookieWindow);
  }
  clear() {
    localStorage.removeItem('TEAM_SELECTION');
    localStorage.removeItem('TEAM_NAME');
    this.modalService.dismissAll(this.cookieWindow);
    this.titleTeam ="Nombra tu equipo";
    this.myHeroTeam = []
        this.toastService.show('Equipo eliminado');

    }

  chargeSaveTeam() {
    this.heroTeam = JSON.parse(localStorage.getItem("TEAM_SELECTION"));
    this.heroTeam.map((data) => {
      this.apiSvcService.getCharacter(data).subscribe((heroe) => {
        this.myHeroTeam.push(heroe)
      });
    })
}
onSelect(charact:string){
    this.router.navigate(['character/', charact]);
    this.modalService.dismissAll(this.cookieWindow);

  }


  showStandard() {
    this.toastService.show('I am a standard toast');
  }

  showSuccess() {
    this.toastService.show('I am a success toast', { classname: 'bg-success text-light', delay: 10000 });
  }

  showDanger(dangerTpl) {
    this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 15000 });
  }

}
