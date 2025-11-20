import { Injectable } from "@angular/core";
import { BaseRepository } from "./base.repository";
import { Observable } from "rxjs";



@Injectable()
export class AddressFinderRepository extends BaseRepository {
  
  FindAdd(postcode:string): Observable<any> {  

    let url = `${this.baseUrl}AddressFinder/Addressfinder/`;

    return this.httpClient.get(url +postcode);
  }
}
