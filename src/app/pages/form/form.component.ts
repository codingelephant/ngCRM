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
  public id:any;
  public isEdit:Boolean;
  public title:any;
  public btnText:any;
  constructor(private customerSvc: CustomerService,
    private router: Router) { 


  }

  ngOnInit() {
    var url = location.href.split("/");
    this.isEdit = (url[url.length-1]=="edit") ? true : false;
          if(this.isEdit){
            this.id = url[4];
            this.customerSvc.getCustomer(this.id).subscribe((result:any)=>{
              
                let d = result.data;
                this.data = d;
            },
            (err)=>{
              console.log("err");
            });

          }


    this.title = (this.isEdit) ? "Edit Account" : "Add New";
    this.btnText = (this.isEdit) ? "Save" : "Submit";

  
  }

  onFormSubmit(form){

    if(form.valid){

      if(this.isEdit){

          this.customerSvc.updateCustomer(this.data, this.id).subscribe(
            (result)=>{
              this.router.navigate(["/customers"]);
            },
            (err)=>{
              console.log("update error");
            }
          );

      }else{

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

}
