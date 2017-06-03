import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-journal-item',
  templateUrl: './journal-item.component.html',
  styleUrls: ['./journal-item.component.css']
})
export class JournalItemComponent implements OnInit {

  @Input('journal')
  public journal: any;

  constructor() { }

  ngOnInit() {
  }

}
