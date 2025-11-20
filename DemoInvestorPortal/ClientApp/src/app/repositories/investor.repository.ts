import { Injectable } from "@angular/core";
import { BaseRepository } from "./base.repository";
import { Observable } from "rxjs";
import { Investor } from "../viewModels/investor.viewmodel";

@Injectable({
  providedIn: 'root'
})
export class InvestorRepository extends BaseRepository {

  addInvestor(investor: Investor): Observable<any> {
    const url = `${this.baseUrl}InsertInvestorData`;

    return this.httpClient.post(url, investor);
  }
}
