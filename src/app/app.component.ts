import { Component } from '@angular/core';
import {Injectable} from '@angular/core'
import {TalentService} from "./talent.service";
import {Talent} from "./talent";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {

  title: string;
  talentCount: Number;

  constructor(private talentService : TalentService) {
    this.title = 'Subscriber Counter';
   talentService.getTalentCount().subscribe(data =>{
     this.talentCount = data;
   });
  }
}
