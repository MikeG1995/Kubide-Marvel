import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/core/characters/characters.component';
import { CoreComponent } from './components/core/core.component';
import { DetailCharactComponent } from './components/core/detail-charact/detail-charact.component';
const routes: Routes = [
    { path:'',component: CoreComponent, children: [
      {
        path:"",
        component: CharactersComponent
      },
      {
        path:"character",
        component: DetailCharactComponent
      }
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
