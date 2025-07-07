import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";
import { profile } from "./profile/profile";

@Component({
  selector: 'app-root',
  imports: [Login, profile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-proj-new';
  username="";
  count=0;

  getUserName(event: Event){
    this.username = (event.target as HTMLInputElement).value;
  }

  setUserName(){
    this.username="Satz";
  }

  getUserNamewithTemplate(valName:string){
    this.username=valName;
    console.log(valName);
  }

  handleClickEvent(){
    console.log("testing function");
    alert("function called ");
    this.handleCheck;
  }

  handleCheck(){
    alert("Inside function");
  }

  handleSum(a:number,b:number){
    console.log(a+b);
  }



  handleCounter(val:string){
    if(val=='minus'){
      this.count > 0 ? this.count-= 1 : 0;
    }
    else if(val=='plus'){
      this.count=this.count+1;
    }
    else{
      this.count=0;
    }

  }
}
