import { Injectable } from "@angular/core";
import { BaseRepository } from "./base.repository";
import { Observable } from "rxjs";
import { Customer } from "../viewModels/customer.viewmodel";
@Injectable()
export class CustomerRepository extends BaseRepository {

  addCustomer(customer: Customer): Observable<any> {
    {
      let url = `${this.baseUrl}Customer/Insert/`;
      return this.httpClient.post(url, customer);

    }}
}
