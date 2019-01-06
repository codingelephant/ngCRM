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

  updateCustomer(data , id){
    return this.http.put("http://localhost:3000/api/accounts/"+id+"/update", data);
  }

  serialize(obj) {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  }

  getCustomers(query=null){
    let qstr = "?";
    if(query){
        qstr += this.serialize(query);
    }
    return this.http.get("http://localhost:3000/api/accounts"+qstr);
  }

  getCustomer(id){
    return this.http.get("http://localhost:3000/api/accounts/"+id);
  }

  deleteCustomer(id){
    return this.http.post("http://localhost:3000/api/accounts/"+id+"/delete", {id:id});
  }

}
