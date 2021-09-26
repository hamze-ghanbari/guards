import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthchildService } from '../authchild.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 
  constructor(private authchildservice : AuthchildService , private router : Router) { }

  ngOnInit(): void {
  }

  public onLogin(email : string , password : string , e : Event){
    e.preventDefault();
if (email === "infogh1000@gmail.com"  &&  password === "123"){
this.authchildservice.loginchild();
}else{
this.router.navigate(['/admin']);
}
  }
}
