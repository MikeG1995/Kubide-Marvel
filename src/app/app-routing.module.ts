import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/core/characters/characters.component';
import { CoreComponent } from './components/core/core.component';
import { DetailCharactComponent } from './components/core/detail-charact/detail-charact.component';
import { CharacterResolver } from './services/characterResolver';
const routes: Routes = [
    { path:'',component: CoreComponent, children: [
      {
        path:"",
        component: CharactersComponent
      },
      {
        path:"character/:id",
        component: DetailCharactComponent,
        resolve: {
          characterId: CharacterResolver
        }
      }
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    CharacterResolver
  ]
})
export class AppRoutingModule { }
