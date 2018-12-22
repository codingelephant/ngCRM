import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { 

  }


  saveCustomer(data){
    return this.http.post("http://localhost:3000/api/customers", data);
  }

}
