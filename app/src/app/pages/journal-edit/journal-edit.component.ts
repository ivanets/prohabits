import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { APIService } from '../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-journal-edit',
  templateUrl: './journal-edit.component.html',
  styleUrls: ['./journal-edit.component.css']
})
export class JournalEditComponent implements OnInit {

  public journal: {id?: number, body: string} = {
    body: ""
  };

  constructor(
    public auth: AuthService,
    public api: APIService,
    public router: Router
  ) {
  }

  ngOnInit() {
    if(!this.auth.isAuthenticated()){
      this.router.navigate(['/login']);
    } else {
      this.getCurrentDraft();
    }
  }

  getCurrentDraft(){
    this.api.getPrivate("journal/draft")
      .then((draft) => {
        if(draft) {
          this.journal = draft;
        }
      });
  }

  draft(){
    this.api.postPrivate("journal/draft", {journal: this.journal})
      .then(() => {
        this.router.navigate(['/journal']);
      });
  }
  save(){
    this.api.postPrivate("journal/save", {journal: this.journal})
      .then(() => {
        this.router.navigate(['/journal']);
      });
  }

}
