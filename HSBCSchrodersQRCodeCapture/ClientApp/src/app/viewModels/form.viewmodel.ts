import { Countries } from "./country.viewmodel";
import { Questions } from "./questions.and.answers.viewmodel";
import { Answers } from "./questions.and.answers.viewmodel";
import { Retailers } from "./retailer.viewmodel";
import { Shirtsizes } from "./shirtsizes.viewmodel";

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
