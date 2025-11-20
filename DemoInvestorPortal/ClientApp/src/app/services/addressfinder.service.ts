import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AddressFinderRepository } from "../repositories/addressfinder.repository";



@Injectable()
export class AddressFinderService {

  constructor(private addressfinderRepository: AddressFinderRepository) {

  }

  FindAdd(postcode:string): Observable<any> {
    return this.addressfinderRepository.FindAdd(postcode);
  }
}
