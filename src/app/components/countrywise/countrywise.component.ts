import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../../service/dashboard.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-countrywise',
  templateUrl: './countrywise.component.html',
  styleUrls: ['./countrywise.component.scss']
})
export class CountrywiseComponent implements OnInit {
  editcountry : FormGroup;
 countryWiseData:any;
 country:string='';
 displayPage="listing"
 selectedCountry:string=""
  constructor(private coronadataservice:DashboardService,private fb:FormBuilder) {
    this.editcountry = fb.group({
      cases : '',
      deaths : '',
      recovered : '',
      tests:''
    });
   }

  ngOnInit(): void {
    this.coronadataservice.getCountryData().subscribe((data)=>{
      this.countryWiseData=data;
    
    })
  }
  getInput(evnt:any){
    
    this.countryWiseData= this.countryWiseData.filter((ele:any)=>ele.country.toLowerCase().indexOf(this.country)>-1)
  }
  edit(data:any){
    this. displayPage="edit"
    this.selectedCountry=data.country;
    this.editcountry.controls.cases.setValue(data.cases)
    this.editcountry.controls.deaths.setValue(data.deaths)
    this.editcountry.controls.recovered.setValue(data.recovered)
    this.editcountry.controls.tests.setValue(data.tests)


  }
  canceleddit(){
    this. displayPage="listing"
  }
  submit(){
    
    this.countryWiseData.forEach((element:any,idx:number) => {
    if(element.country==this.selectedCountry){
      element.cases= parseInt(this.editcountry.controls.cases.value)
      element.deaths=this.editcountry.controls.deaths.value
      element.recovered=this.editcountry.controls.recovered.value
      element.tests=this.editcountry.controls.tests.value;
      this.countryWiseData.splice(idx,1)
      this.countryWiseData[idx]=element;

    }
    });
    this. displayPage="listing"
  }
}
