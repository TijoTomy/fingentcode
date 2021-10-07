import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
public login:boolean=false;
  constructor(private http:HttpClient) { }
  getCoronaData():Observable<any>{
    let url='https://corona.lmao.ninja/v2/all'
    return this.http.get(url)

  }
  getCountryData():Observable<any>{
    let url='https://corona.lmao.ninja/v2/countries'
    return this.http.get(url)

  }

}
