import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-our-growth-item',
  templateUrl: './our-growth-item.component.html',
  styleUrls: ['./our-growth-item.component.css']
})
export class OurGrowthItemComponent implements OnInit {

  @Input('item')
  public item: any;

  constructor() { }

  ngOnInit() {
  }

}
