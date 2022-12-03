import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empreg',
  templateUrl: './empreg.component.html',
  styleUrls: ['./empreg.component.css']
})
export class EmpregComponent {
  
  employeeid=""
  firstname=""
  lastname=""
  housenumber=""
  housename=""
  street=""
  pincode=""
  district=""
  state=""
  country=""
  mobilenumber=""
  email=""
  parentname=""
  gender=""
  degree=""
  year=""
  dof=""
  username=""
  password=""
  confirmpassword=""
  readValue=()=>{
    let data:any={
      "employeeid":this.employeeid,

  "firstname":this.firstname,

  "lastname":this.lastname,

  "houseno":this.housenumber,
  "housename":this.housename,

  "streetname":this.street,

  "pincode":this.pincode,

  "district":this.district,

  "state":this.state,

  "country":this.country,

  "mobile":this.mobilenumber,

  "email":this.email,

  "parentname":this.parentname,

  "gender":this.gender,

  "highestdegree":this.degree,

  "yearofexperience":this.year,

  "dateofjoining":this.dof,

  "username":this.username,

  "password":this.password,

  "confirmpassword":this.confirmpassword

}
console.log(data)
if (this.password==this.confirmpassword) {
    console.log(data)
    alert("REGISTER SUCCESSFULLY") 
this.country
this.confirmpassword
this.degree
this.district
this.dof
this.email
this.employeeid
this.firstname
this.gender
this.housename
this.housenumber
this.lastname
this.mobilenumber
this.parentname
this.password
this.pincode
this.street
this.state
this.year
this.username 
} else {
  alert("PASSWORD AND CONFIRM PASSWORD DOES NOT MATCH")
}
    }
    
  }

