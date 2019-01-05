import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public data:any = {};
  constructor(private customerSvc: CustomerService,
    private router: Router) { 

  }

  ngOnInit() {
  }

  onFormSubmit(form){
    console.log(form);
    console.log(this.data);

    if(form.valid){
      this.customerSvc.saveCustomer(this.data).subscribe(
      (res)=>{
        console.log("Successfully created a customer!");
        this.router.navigate(["/customers"]);
      },
      (err)=>{
        console.log("Something went wrong while creating customer!");
      });

    }

  }

}
