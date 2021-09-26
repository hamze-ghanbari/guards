import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthchildService {

  private loggedInChild : boolean=false;

  public isAthenticated(){
    return new Promise((resolve , reject)=>{
  setTimeout(()=>{
    resolve(this.loggedInChild);
  },1000);
    });
  }
  public checkAuth(){
    return this.loggedInChild;
  }
  
    public loginchild (){
  this.loggedInChild=true;
    }
    public logoutchild (){
      this.loggedInChild=false;
    }
}
