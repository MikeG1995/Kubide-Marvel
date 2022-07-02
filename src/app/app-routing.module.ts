import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/core/characters/characters.component';
import { CoreComponent } from './components/core/core.component';
import { DetailCharactComponent } from './components/core/detail-charact/detail-charact.component';
import { SearchComponent } from './components/core/search/search.component';
import { CharacterResolver } from './services/characterResolver';
import { searchResolver } from './services/searchResolver';
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
      },
      {
        path:"search/:search",
        component: SearchComponent,
        resolve: {
          search: searchResolver
        }
      }
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    CharacterResolver,
    searchResolver
  ]
})
export class AppRoutingModule { }
