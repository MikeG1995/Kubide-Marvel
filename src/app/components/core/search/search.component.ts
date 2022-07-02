import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: '../characters/characters.component.html',
  styleUrls: ['../characters/characters.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, private router:Router
     ) {}

     allCharacters$: Observable<any>;

     ngOnInit(): void {
      this.allCharacters$ = this.route.data.pipe(map(data=> data["search"]))
      console.log(this.allCharacters$)
    }
      onSelect(charact:string){
    this.router.navigate(['character/', charact]);
  }

     }
