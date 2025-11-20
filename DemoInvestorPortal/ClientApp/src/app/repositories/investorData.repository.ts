import { Injectable } from "@angular/core";
import { BaseRepository } from "./base.repository";
import { Observable } from "rxjs";
import { Investor } from "../viewModels/investor.viewmodel";
import { InvestorData } from "../viewModels/investorData.viewmodel";

import { HttpParams } from "@angular/common/http";

@Injectable()
export class InvestorDataRepository extends BaseRepository {

  CheckInvestorData(investorData: InvestorData): Observable<any> {
    const url = `${this.baseUrl}Investors/${investorData.InvestorID}`;
    return this.httpClient.get(url);
  }

}
