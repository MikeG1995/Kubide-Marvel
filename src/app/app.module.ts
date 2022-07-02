import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { CoreComponent } from './components/core/core.component';
import { CharactersComponent } from './components/core/characters/characters.component';
import { DetailCharactComponent } from './components/core/detail-charact/detail-charact.component';
import { SearchComponent } from './components/core/search/search.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { ApiSvcService } from './services/api-svc.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    CoreComponent,
    CharactersComponent,
    DetailCharactComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ],
  providers: [ApiSvcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
