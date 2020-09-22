import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from "../user-list/user-list.component";
import {TalentDetailComponent} from "../talent-detail/talent-detail.component";
import {TalentPageComponent} from "../talent-page/talent-page.component";



const routes: Routes = [
  {path: 'talents', component: UserListComponent},
  {path: 'talentDetail/:talent', component: TalentDetailComponent},
  {path: 'talentPage/:channelID', component: TalentPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
