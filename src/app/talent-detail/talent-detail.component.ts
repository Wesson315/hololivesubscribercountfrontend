import {Component, OnInit} from '@angular/core';
import {Talent} from "../talent";
import { ActivatedRoute } from '@angular/router';
import {TalentService} from "../talent.service";
import {selectedTalent} from "../user-list/user-list.component";

@Component({
  selector: 'app-talent-detail',
  templateUrl: './talent-detail.component.html',
  styleUrls: ['./talent-detail.component.css']
})

export class TalentDetailComponent implements OnInit{


  ngOnInit(): void {
   /* const id = this.route.snapshot.paramMap.get('talent');
    this.service.findSpecificTalent(id)
      .subscribe(talent => this.talent = talent);
    window.scroll(0,0);*/
  }

  // public talent : Talent;


 constructor() {
 }

  public formatNumber(number: Number): string{
    return Number(number).toLocaleString("en");
  }
  public getSelectedTalent() : Talent{
   return selectedTalent;
  }


  getChannelUrl(): string {
    if(selectedTalent.channelID.startsWith("U")){
      return "https://www.youtube.com/channel/"
    }else{
      return "https://space.bilibili.com/"
    }
  }
}
