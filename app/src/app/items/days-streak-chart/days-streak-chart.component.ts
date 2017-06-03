import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-days-streak-chart',
  templateUrl: './days-streak-chart.component.html',
  styleUrls: ['./days-streak-chart.component.css']
})
export class DaysStreakChartComponent implements OnInit {

  @Input('days')
  public days: number;

  public chart: any;

  constructor() { }

  ngOnInit() {
    this.chart = {
      type: 'doughnut',
      data: {
        datasets: [
          {
            labels: ["Progress", ""],
            data: [100, 0],
            borderWidth: ["5px", "0px"],
            borderColor: ["rgba(253,180,77,1.0)", "transparent"],
            backgroundColor: ["rgba(253,180,77,1.0)", "rgba(160,166,186,1.0)"]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutoutPercentage: 98,
        animation: {
          animateRotate: false
        }
      }
    };
  }

}
