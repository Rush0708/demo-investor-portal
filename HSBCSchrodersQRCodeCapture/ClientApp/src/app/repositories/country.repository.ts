import { Injectable } from "@angular/core";
import { BaseRepository } from "./base.repository";
import { Observable } from "rxjs";
import { Countries } from "../viewModels/country.viewmodel";


@Injectable()
export class CountryRepository extends BaseRepository {
  public countryList: Countries[];
  LoadCountries(): Observable<any> {
    let url = `${this.baseUrl}Country/GetCountries`;

    return this.httpClient.get<Countries[]>(url);
  }
}
