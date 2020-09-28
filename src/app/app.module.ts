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
import { ChannelHistoryComponent } from './channel-history/channel-history.component';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    TalentDetailComponent,
    TalentCardComponent,
    ChannelHistoryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule

  ],
  providers: [TalentService, Talent, TalentDetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
