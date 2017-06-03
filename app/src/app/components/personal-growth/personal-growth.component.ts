import { Component, OnInit } from '@angular/core';
import { APIService } from '../../api.service';

@Component({
  selector: 'app-personal-growth',
  templateUrl: 'personal-growth.component.html',
  styleUrls: ['personal-growth.component.css']
})
export class PersonalGrowthComponent implements OnInit {

  public data: any;

  constructor(
    public api: APIService
  ) { }

  ngOnInit() {
    this.getPersonalGrowth();
  }

  getPersonalGrowth(){
    this.api.getPrivate('index/growth/personal')
      .then((data) => {
        this.data = data;
      });
  }

}
