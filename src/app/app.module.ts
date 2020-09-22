import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {UserListComponent} from './user-list/user-list.component';
import {TalentService} from "./talent.service";
import {TalentDetailComponent} from './talent-detail/talent-detail.component';
import {Talent} from "./talent";
import {TalentCardComponent} from './talent-card/talent-card.component';
import { TalentPageComponent } from './talent-page/talent-page.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    TalentDetailComponent,
    TalentCardComponent,
    TalentPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [TalentService, Talent, TalentDetailComponent, TalentPageComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
