import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { 

  }


  saveCustomer(data){
    return this.http.post("http://localhost:3000/api/accounts", data);
  }

  getCustomers(){
    return this.http.get("http://localhost:3000/api/accounts");
  }

  deleteCustomer(id){
    return this.http.post("http://localhost:3000/api/accounts/"+id+"/delete", {id:id});
  }

}
