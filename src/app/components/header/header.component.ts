import { AfterViewInit, ChangeDetectorRef, Component, ElementRef , Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { NavigationEnd, ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

declare global {
  interface Window { dataLayer: any[]; }
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ ]
})



export class HeaderComponent implements OnInit {





  constructor( private router: Router ) { }
  browserName = '';
  browserVersion = '';
  title: string = "Buscador de héroes By Kubide";



    ngOnInit(): void {
      this.browserName = this.detectBrowserName();
      console.log(this.browserName)

      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
      )
}
    detectBrowserName() {

    const agent = window.navigator.userAgent.toLowerCase()
    switch (true) {
      case agent.indexOf('edge') > -1:
        return 'edge';
      case agent.indexOf('opr') > -1 && !!(<any>window).opr:
        return 'opera';
      case agent.indexOf('chrome') > -1 && !!(<any>window).chrome:
        return 'chrome';
      case agent.indexOf('trident') > -1:
        return 'ie';
      case agent.indexOf('firefox') > -1:
        return 'firefox';
      case agent.indexOf('safari') > -1:
        return 'safari';
      default:
        return 'other';
    }
  }
}
