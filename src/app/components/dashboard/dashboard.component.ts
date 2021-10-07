import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../../service/dashboard.service';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
public coronaData:any;
  constructor(private coronadataservice:DashboardService) { 

  }

  ngOnInit(): void {
    this.coronadataservice.getCoronaData().subscribe((data)=>{
      this.coronaData=data;
    })
  }

}
