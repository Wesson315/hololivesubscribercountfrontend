import { Component } from '@angular/core';
import {Injectable} from '@angular/core'
import {TalentService} from "./talent.service";
import {Talent} from "./talent";
import * as viewconstants from "../view/viewconstants";
import { Router } from '@angular/router';

export var cView = viewconstants.currentView;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


@Injectable()
export class AppComponent {

  title: string;
  talentCount: Number;
 // cView = viewconstants.currentView;

  constructor(private talentService : TalentService, private router: Router) {
    this.title = 'Subscriber Counter';
   talentService.getTalentCount().subscribe(data =>{
     this.talentCount = data;
     if(window.location.href.endsWith("/"))this.router.navigateByUrl("/talents")
   });
  }

}
