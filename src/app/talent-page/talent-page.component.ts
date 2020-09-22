import {Component, OnInit} from '@angular/core';
import {Talent} from "../talent";
import {SubhistService} from "../subhist.service";
import {TalentService} from "../talent.service";
import {ActivatedRoute} from '@angular/router';
import {SubscriberHistory} from "../talent-card/SubscriberHistory";

@Component({
  selector: 'app-talent-page',
  templateUrl: './talent-page.component.html',
  styleUrls: ['./talent-page.component.css']
})
export class TalentPageComponent implements OnInit {

  public channelID: string;
  public talent: Talent;
  public entires : Array<SubscriberHistory>;

  constructor(private subhistService: SubhistService, private talentService: TalentService, private route: ActivatedRoute) {

  }


  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.channelID = params["channelID"];
    });
    this.talentService.findSpecificTalent(this.channelID).subscribe((data) => {
      this.talent = data;
    });
  }


}
