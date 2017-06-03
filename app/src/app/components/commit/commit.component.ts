import { Component, OnInit } from '@angular/core';
import { APIService } from '../../api.service';

@Component({
  selector: 'app-commit',
  templateUrl: 'commit.component.html',
  styleUrls: ['commit.component.css']
})
export class CommitComponent implements OnInit {

  public commit: any;

  constructor(
    public api: APIService
  ) { }

  ngOnInit() {
    this.getCommit();
  }

  getCommit(){
    this.api.getPrivate('commit/current')
      .then((commit) => {
        this.commit = commit;
      });
  }

  commitAction(){
    this.api.postPrivate('commit/apply', {commit: this.commit})
      .then(() => {
        this.getCommit();
      });
  }

  completeAction(){
    this.api.postPrivate('commit/done', {commit: this.commit})
      .then(() => {
        this.getCommit();
      });
  }


}
