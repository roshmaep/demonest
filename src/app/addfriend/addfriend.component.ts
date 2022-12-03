import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addfriend',
  templateUrl: './addfriend.component.html',
  styleUrls: ['./addfriend.component.css']
})
export class AddfriendComponent {
constructor(private api:ApiService){}
  name=""
  fname=""
  dfriend=""
  fnickname=""
  readValue=()=>{
   let data:any={"name":this.name,"fname":this.fname,"dfriend":this.dfriend,"fnickname":this.fnickname}
   console.log(data)
   this.api.addfriend(data).subscribe(
    (response:any)=>{
      console.log(response)
    }
   )
}
}
