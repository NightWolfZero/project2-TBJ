import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToProducts() {
    console.log("Trying to update database...");
    setTimeout(() => {
      console.log("Database is updated");
      this.router.navigate(['product-list']);
    }, 2000);
  }
  goToCheckoutForm() {
    console.log("Trying to update database...");
    setTimeout(() => {
      console.log("Database is updated");
      this.router.navigate(['checkout']);
    }, 2000);
  }
  goToContact() {
    console.log("Trying to update database...");
    setTimeout(() => {
      console.log("Database is updated");
      this.router.navigate(['contact']);
    }, 2000);
  }
}