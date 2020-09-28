import {Component, OnInit} from '@angular/core';
import {selectedTalent} from "../talent-detail/talent-detail.component";
import {Talent} from "../talent";
import {SubhistService} from "../subhist.service";
import {chartData} from "./data";
import * as d3 from 'd3';

@Component({
  selector: 'app-channel-history',
  templateUrl: './channel-history.component.html',
  styleUrls: ['./channel-history.component.css']
})
export class ChannelHistoryComponent implements OnInit {
  chartData: any[];
  view: any[] = [1200, 500];
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = false;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Date';
  yAxisLabel: string = 'Subscribers';
  timeline: boolean = true;
  curve = d3.curveBasis;


  recordingTime: string;
  colorScheme = {
    domain: ['#DA691A']
  };
  maxEntry: any;
  latestEntry: any;

  constructor(private subhistService: SubhistService) {

  }


  ngOnInit(): void {
    this.getSubService().getFullHistory(this.getSelectedTalent().channelID).subscribe(data => {
      this.recordingTime = this.formatDate(data[0].snapshotTime)
      this.maxEntry = {"name": this.formatDate(data[0].snapshotTime), "value": data[0].subscriberCount}
      let dataObj = {"name": "Fans", "series": []};
      for (let dataPoint of data) {
        let nextEntry = {"name": this.formatDate(dataPoint.snapshotTime), "value": dataPoint.subscriberCount};

        dataObj.series.push(nextEntry)
        if (this.maxEntry.value < nextEntry.value) this.maxEntry = nextEntry;
        this.latestEntry = nextEntry;
      }
      chartData.push(dataObj)
      Object.assign(this, {chartData})
      console.log()
    });

  }

  getSelectedTalent(): Talent {
    return selectedTalent;
  }

  getSubService(): SubhistService {
    return this.subhistService;
  }

  formatDate(time: number): string {
    return new Date(time).toLocaleString('en-US');
  }


  public formatNumber(number: Number): string {
    return Number(number).toLocaleString("en");
  }


}
