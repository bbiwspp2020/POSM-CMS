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
type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};
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

  public bar_chart: any = {
    labels: [],
    series: [
      {
        name: 'จำนวนโครงการ ',
        data: [150,325,100,320,468,754],
      },
    ],
    chart: {
      toolbar: {
        show: false,
      },
      height: 450,
      type: 'bar',
      fontSize: '14px',
    },
    colors: [
      '#3B7327',
      '#648623',
      '#549E39',
      '#8AB833',
      '#C0CF3A',
      '#CF9200',
      '#F5AD00',
      '#FFD061',
      '#FFE3A0',
    ],
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      customLegendItems: [],
      position: 'right',
      fontSize: '14px',
    },
    grid: {
      show: true,
    },
    xaxis: {
      categories: [],
      labels: {
        style: {
          colors: [
            '#008FFB',
            '#00E396',
            '#FEB019',
            '#FF4560',
            '#775DD0',
            '#546E7A',
            '#26a69a',
            '#D10CE8',
          ],
          fontSize: '12px',
        },
      },
      title: {
      },
    },
    yaxis: {
      labels: {
        
      },
      title: {
      },
    },
  };

  constructor(
    translate: TranslateService
  ) {
    this.translate = translate;

  }
  language: any
  data_bar_chart:any =
  [
    { name:'card01',percen:'10%',totle:'9000' },
    { name:'card01',percen:'10%',totle:'9000' },
    { name:'card01',percen:'10%',totle:'9000' },
    { name:'card01',percen:'10%',totle:'9000' },
    { name:'card01',percen:'10%',totle:'9000' },
  ]
  ngOnInit(): void {
  }
  changeLanguage(lang: string) {
    localStorage.setItem('selectedLanguage', this.language);
    this.translate.use(lang);
  }





}
