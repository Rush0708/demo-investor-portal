import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RetailerRepository} from "../repositories/retailer.repository";


@Injectable()
export class RetailerService {

  constructor(private retailerRepository: RetailerRepository) {

  }

  LoadRetailers(): Observable<any> {
    return this.retailerRepository.LoadRetailers();
  }
}
