import {Component, OnInit} from '@angular/core';
import {Talent} from "../talent";
import {TalentService} from "../talent.service";
import {BrowserModule} from "@angular/platform-browser"
import {TalentDetailComponent} from "../talent-detail/talent-detail.component";
import {TalentCardComponent} from "../talent-card/talent-card.component";

// export let selectedTalent : Talent;

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  public talents: Talent[];


  constructor(private talentService: TalentService) {
  }

  ngOnInit() {
   this.talentService.findAll().subscribe(data =>{
     this.talents = data;
   });

  }

  public formatSubcount(talent: Talent): string{
    return Number(talent.subscriberCount).toLocaleString("en");
  }
/*
  public setSelectedTalent(talent : Talent){
    selectedTalent = talent;
    window.scroll(0,0)
  }
*/


}
