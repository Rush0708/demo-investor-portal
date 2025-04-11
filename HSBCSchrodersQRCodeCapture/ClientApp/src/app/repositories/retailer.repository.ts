import { Injectable } from "@angular/core";
import { BaseRepository } from "./base.repository";
import { Observable } from "rxjs";
import { Retailers } from "../viewModels/retailer.viewmodel";


@Injectable()
export class RetailerRepository extends BaseRepository {
  
  LoadRetailers(): Observable<any> {
    let url = `${this.baseUrl}Retailer/GetRetailers`;

    return this.httpClient.get<Retailers[]>(url);
  }
}
