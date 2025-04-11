import { Countries } from "./country.viewmodel";
import { Retailers } from "./retailer.viewmodel";
import { Shirtsizes } from "./shirtsizes.viewmodel";

export class Customer {
  public CompetitionId: number;
  public UniqueCode: string;
  public PrizeId: number;
  public Forename: string;
  public Surname: string;
  public AddressLine1: string;
  public AddressLine2: string;
  public AddressLine3: string;
  public Town: string;
  public County: string;
  public CountryId: number;
  public DOB: Date;
  public Postcode: string;
  public EmailAddress: string;
  public RetailerId: number;
  public OptIn: boolean;
  constructor() {

  }
}
