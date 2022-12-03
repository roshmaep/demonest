import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  constructor(private route:Router){}
  employeeid=""
  password=""
  readValue=()=>{
    let data:any={"employeeid":this.employeeid,"password":this.password}
    console.log(data)
    if (this.employeeid=="1122" && this.password=="12345") {
      alert("Employee Login Successfully")
      this.employeeid=""
      this.password=""
      this.route.navigate(['/navbar2'])
    } else {
      alert("invalid Credential")
    }
  }
}
