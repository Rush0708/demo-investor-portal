import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CustomerRepository } from "../repositories/customer.repository";
import { Customer } from "../viewModels/customer.viewmodel";


@Injectable()


export class CustomerService { 
  
  constructor(private customerRepository : CustomerRepository) {    
  }
  addCustomer(customer : Customer): Observable<any> {
    return this.customerRepository.addCustomer(customer);
  }
}
