import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { InvestorDataRepository } from "../repositories/investorData.repository";
import { Investor } from "../viewModels/investor.viewmodel";
import { InvestorData } from "../viewModels/investorData.viewmodel";


@Injectable({
  providedIn: 'root',
})
export class InvestorDataService {
  constructor(private investorDataRepository: InvestorDataRepository) { }

  CheckInvestordata(investor: InvestorData): Observable<any> {
    return this.investorDataRepository.CheckInvestorData(investor);
  }
}
