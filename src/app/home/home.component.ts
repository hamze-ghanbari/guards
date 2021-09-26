import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isLoggedIn : boolean=false;
  constructor(private authservice : AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn=this.authservice.checkAuth();
  }

  public login(){
this.authservice.login();
  }
  public logout(){
    this.authservice.logout();
  }
}
