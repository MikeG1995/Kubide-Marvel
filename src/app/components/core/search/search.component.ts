import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: '../characters/characters.component.html',
  styleUrls: ['../characters/characters.component.scss']
})
export class SearchComponent implements OnInit {
  public page:number = 0;
  @ViewChild ('cookieWindow', { static: true }) public cookieWindow: any;



  constructor(
    private route: ActivatedRoute, private router:Router,    private modalService: NgbModal

     ) {}

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
      console.log(clickdata)
    }

      onSelect(charact:string){
    this.router.navigate(['character/', charact]);
  }

     }
