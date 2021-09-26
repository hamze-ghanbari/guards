import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router,  CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService  } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthchildGuard implements CanActivate, CanActivateChild {
  constructor(private authservice : AuthService,private router : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authservice.isAthenticated()
      .then((athenticated : any) => {
        if(athenticated){
           return true;
        }else{
          this.router.navigate(['/notauthorized']);
        }
      });
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(childRoute,state);
  }
  
}
