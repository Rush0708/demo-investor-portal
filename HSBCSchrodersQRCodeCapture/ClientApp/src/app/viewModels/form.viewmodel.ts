import { Countries } from "./country.viewmodel";


export class Form {
  public Id: number;
  public enterPageValid = false;
  public country: Countries;
  public dob: Date;
  public postcode: string;
  public emailAddress: string;
  public detailsPageValid = false;
  public investorID: string;
  constructor() {

  }
}
