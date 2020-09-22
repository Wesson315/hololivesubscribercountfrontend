import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Talent} from './talent';
import {Observable} from 'rxjs/Observable';
import {environment} from "../environments/environment";

@Injectable()
export class TalentService {
  private baseURl = environment.SERVER_URL;
  private allTalentsUrl: string;
  private postTalentUrl: string;
  private talentUrl: string;
  private searchTalentUrl: string;
  private getTalentCountUrl: string;
  constructor(private http: HttpClient) {


    this.allTalentsUrl = this.getUrl("talents");
    this.postTalentUrl = this.getUrl("saveTalent");
    this.talentUrl = this.getUrl("talentDetail/");
    this.searchTalentUrl = this.getUrl("findByName/");
    this.getTalentCountUrl = this.getUrl("getTalentCount");

  }

  private getUrl(appendix: string): string {
    return this.baseURl + appendix;
  }

  public findAll(): Observable<Talent[]> {
    return this.http.get<Talent[]>(this.allTalentsUrl);
  }

  public findSpecificTalent(channelID: string): Observable<Talent> {
    return this.http.get<Talent>(this.talentUrl + channelID);
  }

  public searchTalent(searchTerm: string): Observable<Talent[]> {
    return this.http.get<Talent[]>(this.searchTalentUrl + searchTerm);

  }

  public getTalentCount(): Observable<Number> {
    return this.http.get<Number>(this.getTalentCountUrl);

  }



}
