import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from '../deactivate.guard';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit , CanComponentDeactivate {
@ViewChild('input') input : ElementRef;
  constructor() { }
 

  ngOnInit(): void {
  }
  canDeactivate() : boolean | Observable<boolean> | Promise<boolean>{
if(this.input.nativeElement.value !==''){
  return confirm('do you wanna save the value ? ');
}else{
  return true;
}
  }
}
