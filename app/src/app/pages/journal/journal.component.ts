import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { APIService } from '../../api.service';

@Component({
  selector: 'app-journal',
  templateUrl: 'journal.component.html',
  styleUrls: ['journal.component.css']
})
export class JournalComponent implements OnInit {

  public journals: Array<any>;

  constructor(
    public auth: AuthService,
    public router: Router,
    public api: APIService
  ) { }

  ngOnInit() {
    if(!this.auth.isAuthenticated()){
      this.router.navigate(['/login']);
    } else {
      this.getJournals();
    }
  }


  getJournals(){
    this.api.getPrivate('journal/list')
      .then((journals) => {
        this.journals = journals;
      });
  }

}
