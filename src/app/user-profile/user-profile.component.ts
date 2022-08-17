import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { CurrentUser } from './login.component';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  cust : Customer = {
    "id":this.id,
    "firstname":this.currentUser.firstName,
    "lastname":this.currentUser.lastName,
    "username":this.currentUser.uname,
    "password":this.currentUser.pword,
    "address":this.currentUser.address,
    "phoneNumber":this.currentUser.phoneNumber
  };
 
  constructor(private custservice:CustomerService) { }

  ngOnInit(): void {
  }
  submitUpdate():any {
    //console.log(this.update_c)
     this.custservice.updateCustomer(this.cust).subscribe(data=>{console.log(data)});
     
   
    }
}
