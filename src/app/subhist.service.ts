import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from "../environments/environment";
import {SubscriberHistory} from "./talent-card/SubscriberHistory";


@Injectable({
  providedIn: 'root'
})
export class SubhistService {
  private baseURl = environment.SERVER_URL;
  private fullHistURL: string;
  private beforeHistURL: string;
  private afterHistURL: string;
  private betweenHistURL: string;

  constructor(private http: HttpClient) {
    this.fullHistURL = this.getUrl("subhist")
    this.beforeHistURL = this.getUrl("subhist/before")
    this.afterHistURL = this.getUrl("subhist/after")
    this.betweenHistURL = this.getUrl("subhist/between")
  }

  private getUrl(appendix: string): string {
    return this.baseURl + appendix;
  }

  /**
   * Gets the full recorded history of hololive channels.
   * @param channelID
   */
  public getFullHistory(channelID: string): Observable<Array<SubscriberHistory>> {
    let httpParams = new HttpParams();
    httpParams.append("channelID", channelID);
    let options = {
      params : httpParams
    }
    return this.http.get<Array<SubscriberHistory>>(this.fullHistURL, options);
  }
  /**
   * Gets the full recorded history of hololive channels before a timestamp.
   * @param channelID
   */
  public getBeforeHistory(channelID: string, before: number): Observable<Array<SubscriberHistory>> {
    let httpParams = new HttpParams();
    httpParams.append("channelID", channelID);
    httpParams.append("before", before.toString());
    let options = {
      params : httpParams
    }
    return this.http.get<Array<SubscriberHistory>>(this.beforeHistURL, options);
  }
  /**
   * Gets the full recorded history of hololive channels after a timestamp.
   * @param channelID
   */
  public getAfterHistory(channelID: string, after: number): Observable<Array<SubscriberHistory>> {
    let httpParams = new HttpParams();
    httpParams.append("channelID", channelID);
    httpParams.append("after", after.toString());
    let options = {
      params : httpParams
    }
    return this.http.get<Array<SubscriberHistory>>(this.afterHistURL, options);
  }
  /**
   * Gets the full recorded history of hololive channels between two timestamps.
   * @param channelID
   */
  public getBetweenHistory(channelID: string, from: number, to: number): Observable<Array<SubscriberHistory>> {
    let httpParams = new HttpParams();
    httpParams.append("channelID", channelID);
    httpParams.append("from", from.toString());
    httpParams.append("to", to.toString());
    let options = {
      params : httpParams
    }
    return this.http.get<Array<SubscriberHistory>>(this.betweenHistURL, options);
  }

}
