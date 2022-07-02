import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
  searchText:any = '';
  constructor( private router: Router) { }


  ngOnInit(): void {
  }
  updateSearch() {
    console.log(this.searchText);
    this.router.navigate(['search/', this.searchText]);

  }

}
