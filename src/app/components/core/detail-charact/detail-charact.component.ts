import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { filter, map, Observable, pairwise } from 'rxjs';
import { hero } from 'src/app/models/hero';

@Component({
  selector: 'app-detail-charact',
  templateUrl: './detail-charact.component.html',
  styleUrls: ['./detail-charact.component.scss']
})
export class DetailCharactComponent implements OnInit {

  characterId$: Observable<hero>;
  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.characterId$ = this.route.data.pipe(map(data=> data["characterId"]))
  }
}
