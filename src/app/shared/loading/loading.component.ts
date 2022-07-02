import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {LoadingService} from './loading.service';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, RouteConfigLoadEnd, RouteConfigLoadStart, Router} from "@angular/router";

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  @Input()
  routing: boolean = false;

  @Input()
  detectingRoutingOngoing = false;

  constructor(public loadingService: LoadingService, private router: Router) {  }

  ngOnInit() {
    if (this.detectingRoutingOngoing) {
      this.router.events.subscribe(
        event => {
          if (event instanceof NavigationStart ||
              event instanceof RouteConfigLoadStart) {
            this.loadingService.loadingOn();
          }
          else if (event instanceof NavigationEnd ||
                  event instanceof NavigationError ||
                  event instanceof NavigationCancel ||
                  event instanceof RouteConfigLoadEnd) {
            this.loadingService.loadingOff();
          }
        }
      )
      }
  }
}
