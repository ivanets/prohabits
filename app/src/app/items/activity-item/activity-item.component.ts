import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.css']
})
export class ActivityItemComponent implements OnInit {

  @Input('item')
  public item: any;

  constructor() { }

  ngOnInit() {
  }

}
