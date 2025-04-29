import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { InvestorRepository } from "../repositories/investor.repository";
import { Investor } from "../viewModels/investor.viewmodel";

@Injectable({
  providedIn: 'root' // Optional: makes the service available app-wide without needing to register it manually
})
export class InvestorService {

  constructor(private investorRepository: InvestorRepository) { }

  addInvestor(investor: Investor): Observable<any> {
    return this.investorRepository.addInvestor(investor);
  }
}
