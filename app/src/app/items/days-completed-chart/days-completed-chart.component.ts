import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-days-completed-chart',
  templateUrl: './days-completed-chart.component.html',
  styleUrls: ['./days-completed-chart.component.css']
})
export class DaysCompletedChartComponent implements OnInit {

  @Input('days')
  public days: number;

  public chart: any;

  constructor() { }

  ngOnInit() {
    let percentage = this.days/21 * 100;
    this.chart = {
      type: 'doughnut',
      data: {
        datasets: [
          {
            labels: ["Progress", ""],
            data: [percentage, 100-percentage],
            borderWidth: ["5px", "0px"],
            borderColor: ["rgba(97,158,215,1.0)", "transparent"],
            backgroundColor: ["rgba(97,158,215,1.0)", "rgba(243,246,249,1.0)"]
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
