import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as ApexCharts from 'apexcharts';

import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid,
} from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  translate: TranslateService;
  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: any = {
    series: [44, 55, 13],
    labels: ['Category'],
    chart: {
      width: 600,
      type: 'pie',
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'flex-start',
    },
    responsive: [
      {
        breakpoint: 450,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  constructor(
    translate: TranslateService
  ) {
    this.translate = translate;

  }
  language: any
  ngOnInit(): void {
  }
  changeLanguage(lang: string) {
    localStorage.setItem('selectedLanguage', this.language);
    this.translate.use(lang);
  }





}
