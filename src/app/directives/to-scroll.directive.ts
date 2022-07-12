import { Directive, HostListener } from '@angular/core';
import { gsap,Back } from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin)
@Directive({
  selector: '[appToScroll]'
})
export class ToScrollDirective {

  constructor() { }
  @HostListener('click') click() {
    gsap.to(window, {
      scrollTo:"#NavPosition",
      duration: 1,
      ease: Back.easeOut.config(1.7), y: -100
    });
    }
  }

