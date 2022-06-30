
import { Component, OnInit } from "@angular/core";
//import { BlogService } from "src/app/services/blog.service";
//import { Post } from "src/app/models/post";
//import { AuthService } from "src/app/services/auth.service";
import { Observable } from "rxjs";
import { ApiSvcService } from "src/app/services/api-svc.service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
//  blogPost$: Observable<Post[]>;
//  appUser$ = this.authService.appUser$;


  fakePost = {
    "post":[
    {fake:"Calle Marques de Murrieta n34"},
    {fake:"Plaza Espolon"},
    {fake:"Gran Via Logroño"},
    {fake:"Ezcaray La Rioja"},
    {fake:"Calle Chile"},
    {fake:"Vara de Rey, Logroño"},
  ]
  };
  constructor(
//    private blogService: BlogService,
 //   private authService: AuthService,
 private characterSvc: ApiSvcService
  ) {}
  allCharacters!: Observable<any>;

  ngOnInit() {
 //       this.blogPost$ = this.blogService.getFirstPosts();
  this.getCharacters();
    console.log(this.getCharacters())
  }
  getCharacters() {
    this.allCharacters = this.characterSvc.getAllCharacters();
  }

}
