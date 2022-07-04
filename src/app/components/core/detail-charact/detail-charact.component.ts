import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { hero } from 'src/app/models/hero';
import { SharedService } from 'src/app/services/shared-service';

@Component({
  selector: 'app-detail-charact',
  templateUrl: './detail-charact.component.html',
  styleUrls: ['./detail-charact.component.scss']
})
export class DetailCharactComponent implements OnInit {

  characterId$: Observable<hero>;
  constructor(private route: ActivatedRoute, private _sharedService: SharedService) { }
  @Output() cambio = new EventEmitter();


  ngOnInit(): void {
    this.characterId$ = this.route.data.pipe(map(data=> data["characterId"]))
  }
  cambiar(clickdata) {
    console.log(clickdata);
    this._sharedService.emitChange(clickdata);
  }

}
