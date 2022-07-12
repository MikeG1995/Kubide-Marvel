import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { hero } from 'src/app/models/hero';
import { ToastService } from 'src/app/shared/toast/toast-service';

@Component({
  selector: 'app-detail-charact',
  templateUrl: './detail-charact.component.html',
  styleUrls: ['./detail-charact.component.scss']
})
export class DetailCharactComponent implements OnInit {

  characterId$: Observable<hero>;
  constructor(private route: ActivatedRoute,     public toastService: ToastService,
    ) { }
  @Output() cambio = new EventEmitter();


  ngOnInit(): void {
    this.characterId$ = this.route.data.pipe(map(data=> data["characterId"]));
    this.characterId$.subscribe(data=> {console.log(data)});

  }
  cambiar(clickdata) {
    const charactersFav = JSON.parse(localStorage.getItem("TEAM_SELECTION"));

      if ( charactersFav == null ) {
        localStorage.setItem(
          "TEAM_SELECTION",
          JSON.stringify([clickdata])
        )
      } else {
        if (charactersFav.length < 6) {
          localStorage.setItem(
            "TEAM_SELECTION",
            JSON.stringify([...charactersFav, clickdata])
          )
          this.toastService.show('Heroe añadido', { classname: 'bg-success text-light', delay: 2000 });

        } else {
          this.toastService.show('Ya has completado 6 heroes', { classname: 'bg-danger text-light', delay: 5000 });
        }
        }



     }

}
