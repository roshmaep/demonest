import { Component } from '@angular/core';

@Component({
  selector: 'app-addfriend',
  templateUrl: './addfriend.component.html',
  styleUrls: ['./addfriend.component.css']
})
export class AddfriendComponent {
  name=""
  fname=""
  dfriend=""
  fnickname=""
  readValue=()=>{
   let data:any={"name":this.name,"fname":this.fname,"dfriend":this.dfriend,"fnickname":this.fnickname}
   console.log(data)
}
}
