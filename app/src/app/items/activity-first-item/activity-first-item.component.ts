import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-activity-first-item',
  templateUrl: './activity-first-item.component.html',
  styleUrls: ['./activity-first-item.component.css']
})
export class ActivityFirstItemComponent implements OnInit {

  @Input('item')
  public item: any;

  constructor() { }

  ngOnInit() {
  }

}
