import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from "../user-list/user-list.component";
import {TalentDetailComponent} from "../talent-detail/talent-detail.component";
import {ChannelHistoryComponent} from "../channel-history/channel-history.component";


const routes: Routes = [
  {path: 'talents', component: UserListComponent},
  {path: 'talentDetail/:talent', component: TalentDetailComponent},
  {path: 'channelhist', component: ChannelHistoryComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
