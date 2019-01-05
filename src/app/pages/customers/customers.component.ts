import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  public customers:any = [];
  public deleted_id:any;
  constructor(private cSvc: CustomerService) { 
    
  }

  ngOnInit() {
    this.cSvc.getCustomers().subscribe(
      (res)=>{
          let result:any = res;
          if(result.success){
            this.customers = result.data;
          }
      },
      (err)=>{
        console.log(err);
      }
    );
  }
  

  findItemById(element, id){
    return element.id == this.deleted_id;
  }

  onDelete(id){
   // let self = this;
    var yes = confirm("Are you sure to delete ?");
    if(yes){
      //call a service to delete the record 
      this.cSvc.deleteCustomer(id).subscribe((result)=>{
            this.deleted_id = id;
            let deletedIndex = this.customers.findIndex(this.findItemById, this);
            this.customers.splice(deletedIndex,1);
      },
      (err)=>{
          console.log(err);
      });
    }

  }

}
