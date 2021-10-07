import { Component,OnInit,AfterViewInit } from '@angular/core';
import {DashboardService} from './service/dashboard.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,AfterViewInit {
  login:boolean=false;
  constructor( public generelService:DashboardService,private route: Router){
  }
  public get geturl():string{
   return this.route.url;
  }
  ngOnInit(): void {
    // if(this.route.url.indexOf('login')>1 ||this.route.url=="/") {
    //   this.login=true;
    // }
    // else{
    //   this.login=false;
    // }
   }
   ngAfterViewInit(){
    //  debugger
    //  setTimeout(() => {
    //   console.log(this.route);
    //  }, 3000);
    
   }
   getpage():boolean{
     if(this.geturl.indexOf('login')>-1){
      return true;
     }
     else{
       return false;
     }
   }
  // login:boolean=true;
  title = 'fingenttask';
}
