import { Component, OnInit } from '@angular/core';
import { APIService } from '../../api.service';

@Component({
  selector: 'app-activity',
  templateUrl: 'activity.component.html',
  styleUrls: ['activity.component.css']
})
export class ActivityComponent implements OnInit {

  public first: any;
  public list: Array<any>;

  constructor(
    public api: APIService
  ) { }

  ngOnInit() {
    this.getActivities();
  }

  getActivities(){
    this.api.getPrivate('index/activities')
      .then((activities: any[]) => {
        if(activities.length) {
          this.first = activities.shift();
          this.list = activities;
        }
      });
  }
}
