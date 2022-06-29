import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isMenuCollapsed = true;
  @ViewChild('NavbarAnimation', { static: true }) private Navbar!: ElementRef<HTMLDivElement>;

  constructor() { }

  ngOnInit(): void {
    this.layerAnimation();

  }
  layerAnimation(){
    const showAnim = gsap.from(this.Navbar.nativeElement, {
      yPercent: -100,
      paused: true,
      duration: 0.2,
    }).progress(1);
    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
      },
    });
  }
}
