import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public auth: AuthService,
    public router: Router
  ) {
    if(!this.auth.isAuthenticated()){
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
  }

}
