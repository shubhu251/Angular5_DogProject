import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  constructor(private http: Http){
    this.fetch_dogs_breed();
    this.fetch_img_random_all();
  }
    img_url='';
    breed_name: string ='';
    breeds_array =[];
    sub_breeds_array=[];
    breed_img_array=[];
    sub_breed_title: string='';
    fetch_dogs_breed()
    {
      this.http.get('https://dog.ceo/api/breeds/list')
      .subscribe(
        (res: Response)=>{
          const respo_json=res.json();
          console.log(respo_json);
          this.breeds_array=respo_json.message;   
        }
      )
    }
    fetch_img_random_all()
    {

      this.http.get('https://dog.ceo/api/breeds/image/random')
      .subscribe(
        (res: Response)=>{
          const respo_json=res.json();
          console.log(respo_json);
          this.img_url=respo_json.message;   
        }
      )
    }  
    breedDetail(breed)
    {
      this.breed_name=breed;
      this.fetch_sub_breeds();
      this.fetch_img_by_breed();
     
    }
    fetch_sub_breeds()
    {
      this.http.get('https://dog.ceo/api/breed/'+this.breed_name+'/list')
      .subscribe(
        (res: Response)=>{
          const respo_json3=res.json();
          console.log(respo_json3);
          this.sub_breeds_array=respo_json3.message; 
          if(this.sub_breeds_array.length==0)
          {
            this.sub_breed_title="No subreed found";
          }else
          {
            this.sub_breed_title='Sub-Breeds('+this.sub_breeds_array.length+')';
          }  
        }
      )
    }
    fetch_img_by_breed()
    {
     
      this.http.get('https://dog.ceo/api/breed/'+this.breed_name+'/images')
      .subscribe(
        (res: Response)=>{
          const respo_json3=res.json();
          console.log(respo_json3);
          this.breed_img_array=respo_json3.message;   
          this.img_url=this.breed_img_array[0];
        }
      )
    }
    fetch_img_by_breed_sub_breed(sbreed)
    { this.http.get('https://dog.ceo/api/breed/'+this.breed_name+'/'+sbreed+'/images/random')
      .subscribe(
        (res: Response)=>{
          const respo_json3=res.json();
          console.log(respo_json3);
          this.img_url=respo_json3.message;           
        }
      )

    }
    
  ngOnInit() {
  }

}
