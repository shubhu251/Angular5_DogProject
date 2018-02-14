import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
@Component({
  selector: 'app-apicall',
  templateUrl: './apicall.component.html',
  styleUrls: ['./apicall.component.css']
})
export class ApicallComponent implements OnInit {

  constructor(private http: Http){}
    cityName='';
    cityHumid='';
    searchCity()
    {
      this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+this.cityName+'&APPID=8aef2bba502d7ac4adb56db9b13f54b4')
      .subscribe(
        (res: Response)=>{
          const waetherCity=res.json();
          console.log(waetherCity);
          this.cityHumid=waetherCity.main.humidity;
        }
      )
    }

  ngOnInit() {
  }

}
