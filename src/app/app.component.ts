import { Component } from '@angular/core';
import { Customer } from './models/Customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Green Lantern Corp App is powered up!';
  public customer!: Customer; 
};
//Login/Register
 uname: stringpublic = '';
public pword: string = '';
public editProfile: boolean = false;
public firstName: string = '';
public lastname: string = '';
//Profile
public username: string = '';
public password: string = '';
public address: string = '';

profileEdit(): any {
  editProfile = true;
}

updateCustomer(): any {
  let updatedCust: Customer = {
    id: this.customer.id,
    firstName: this.firstName,
    lastName: '',
    address: '',
    phoneNumber: '',
    uname: '',
    pword: '',
    email: ''
  };
}
}

