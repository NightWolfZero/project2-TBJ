import { Component, OnInit } from "@angular/core";

declare var AddressFinder: any;

@Component({
  selector: "app-checkout-form",
  templateUrl: "./checkout-form.component.html",
  styleUrls: ["./checkout-form.component.scss"]
})
export class CheckoutFormComponent implements OnInit {
  
  ngOnInit() {
    let script = document.createElement("script");
    script.src = "https://api.addressfinder.io/assets/v3/widget.js";
    script.async = true;
    script.onload = this.initAf;
    document.body.appendChild(script);
  }

  initAf() {
    let widget = new AddressFinder.Widget(
      document.getElementById("addrs_1"),
      "ADDRESSFINDER_DEMO_KEY",
      "AU",
      {}
    );

    
  }
}