import { Countries } from "./country.viewmodel";
import { Retailers } from "./retailer.viewmodel";
import { Shirtsizes } from "./shirtsizes.viewmodel";

export class Investor {
  public Id: number;
  public InvestorID: string;
  public EmailAddress: string;
  public CountryCode: string;
  public PhoneNumber: string;

  constructor() {
    this.Id = 0;
    this.InvestorID = '';
    this.EmailAddress = '';
    this.CountryCode = '';
    this.PhoneNumber = '';
  }
}

