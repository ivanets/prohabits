import { Component, OnInit } from '@angular/core';
import { APIService } from '../../api.service';

@Component({
  selector: 'app-quote',
  templateUrl: 'quote.component.html',
  styleUrls: ['quote.component.css']
})
export class QuoteComponent implements OnInit {

  public quote: any;

  constructor(
    public api: APIService
  ) { }

  ngOnInit() {
    this.api.get('index/quote')
      .then((quote) => {
        this.quote = quote;
      });
  }

}
