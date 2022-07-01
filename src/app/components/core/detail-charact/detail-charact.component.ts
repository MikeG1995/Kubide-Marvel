import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-detail-charact',
  templateUrl: './detail-charact.component.html',
  styleUrls: ['./detail-charact.component.scss']
})
export class DetailCharactComponent implements OnInit {

  characterId$: Observable<any>;
  character$: Observable<any>;

  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.characterId$ = this.route.data.pipe(map(data=> data["characterId"]))
    console.log(this.characterId$)
  }

}
