import {Component, Input} from '@angular/core';
import {Talent} from "../talent";
import * as colors from "../rank-colors";
import * as talentDetail from "../talent-detail/talent-detail.component";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-talent-card',
  templateUrl: './talent-card.component.html',
  styleUrls: ['./talent-card.component.css']
})
export class TalentCardComponent {

  @Input() talent: Talent;
  @Input() rank: number;
  constructor() {
  }



  public formatNumber(number: Number): string{
    return Number(number).toLocaleString("en");
  }

  public getRankColor(): string{
    if(this.rank == 1)return colors.gold
    if(this.rank>=2 && this.rank<=3)return colors.bronze;
    return colors.white;
  }

  ngOnInit(): void {
  }

  public selectTalent(){

    talentDetail.setSelectedTalent(this.talent)
    setTimeout(() =>{
      let element = document.querySelector("#scrollToDetail")
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    },50)

  }



  hoverStart(event) {
    event.target.classList.add("hoverClass");
  }

  hoverEnd(event) {
    event.target.classList.remove("hoverClass");
  }

  getThumbnailURL() :string{
    return environment.SERVER_URL+this.talent.thumbnailID
  }
}
