import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: '../characters/characters.component.html',
  styleUrls: ['../characters/characters.component.scss']
})
export class SearchComponent implements OnInit {
  public page:number = 0;


  constructor(
    private route: ActivatedRoute, private router:Router
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

      onSelect(charact:string){
    this.router.navigate(['character/', charact]);
  }

     }
