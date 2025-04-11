import { Countries } from "./country.viewmodel";
import { Questions } from "./questions.and.answers.viewmodel";
import { Answers } from "./questions.and.answers.viewmodel";
import { Retailers } from "./retailer.viewmodel";
import { Shirtsizes } from "./shirtsizes.viewmodel";

export class Form {
  public competitionId: number;
  public uniqueCode: string;
  public enterPageValid = false;
  public shirtSize: Shirtsizes;
  public forename: string;
  public surname: string;
  public addressLine1: string;
  public addressLine2: string;
  public AddressLine3: string;
  public town: string;
  public county: string;
  public country: Countries;
  public dob: Date;
  public postcode: string;
  public emailAddress: string;
  public retailer: Retailers;
  public optIn: boolean;
  public detailsPageValid = false;
  public questionList: Questions[];
  public questionNumber = 0;
  public answerList: Answers[];  
  constructor() {

  }
}
