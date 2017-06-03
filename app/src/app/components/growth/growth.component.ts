import { Component, OnInit } from '@angular/core';
import { APIService } from '../../api.service';

@Component({
  selector: 'app-growth',
  templateUrl: 'growth.component.html',
  styleUrls: ['growth.component.css']
})
export class GrowthComponent implements OnInit {

  public data: any;

  constructor(
    public api: APIService
  ) { }

  ngOnInit() {
    this.getOurGrowth();
  }

  getOurGrowth(){
    this.api.getPrivate('index/growth/our')
      .then((data) => {
        console.log(data);
        this.data = data;
      });
  }

}
