import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map, Observable } from 'rxjs';
import { SharedService } from 'src/app/services/shared-service';

@Component({
  selector: 'app-search',
  templateUrl: '../characters/characters.component.html',
  styleUrls: ['../characters/characters.component.scss']
})
export class SearchComponent implements OnInit {
  public page:number = 0;
  @ViewChild ('cookieWindow', { static: true }) public cookieWindow: any;



  constructor(
    private _sharedService: SharedService, private route: ActivatedRoute, private router:Router,    private modalService: NgbModal

     ) {}

     allCharacters$: Observable<any>;

     ngOnInit(): void {
      this.allCharacters$ = this.route.data.pipe(map(data=> data["search"])), this.page
      console.log(this.allCharacters$)
    }
    next() {

    }
    selectedHerosMenu(){
      this.modalService.open(this.cookieWindow)
    }

    gcook() {
      this.modalService.dismissAll(this.cookieWindow);
    }
    cambiar(clickdata) {
      console.log(clickdata)
    }
       prev() {

    }

      onSelect(charact:string){
    this.router.navigate(['character/', charact]);
  }

     }
