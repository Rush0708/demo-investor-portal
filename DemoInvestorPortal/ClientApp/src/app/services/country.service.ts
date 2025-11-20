import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CountryRepository} from "../repositories/country.repository";


@Injectable()
export class CountryService {

  constructor(private countryRepository: CountryRepository) {

  }

  LoadCountries(): Observable<any> {
    return this.countryRepository.LoadCountries();
  }
}
