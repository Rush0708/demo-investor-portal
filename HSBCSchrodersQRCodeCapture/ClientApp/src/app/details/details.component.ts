import { selectSetup } from '../../assets/js/setup';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from "@angular/router";
import { RecaptchaErrorParameters } from "ng-recaptcha";
import { CompetitionService } from "../services/competition.service"
import { FormService } from "../services/form.service"
import { Competition } from '../viewModels/competition.viewmodel';
import { ShirtSizeService } from "../services/shirtsize.service";
import { AddressFinderService } from "../services/addressfinder.service";
import { CountryService } from "../services/country.service";
import { Shirtsizes } from "../viewModels/shirtsizes.viewmodel";
import { Countries } from "../viewModels/country.viewmodel";
import { Retailers } from "../viewModels/retailer.viewmodel";
import { Customer } from "../viewModels/customer.viewmodel";
import { CustomerService } from "../services/customer.service";
import * as $ from 'jquery';
import { NgForm, FormGroup } from '@angular/forms';
import { RetailerService } from '../services/retailer.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['../app.component.css', './details-component.css']
})

export class DetailsComponent implements OnInit {
  public dataError;
  public ageError;
  public shirtList: Shirtsizes[];
  public countryList: Countries[];
  public retailerList: Retailers[];
  public addressList: string[][];
  public enteredAge: number;
  public addressLoaded = false;
  public postcodeError = false;
  public showPostcodeError = false;
  public enteredAddress: string[];
  public dataAdded = false;
  public insertError = false;
  public captchaResponsVar;
  public captchaError: boolean;
  public captchaRequired = false;
  public message: string;
  public countryName: string = "SELECT COUNTRY";
  public retailerName: string = "SELECT RETAILER";
  public shirtSizeDisplayName: string = "SELECT SIZE";
  public addressDisplay: string = "SELECT YOUR ADDRESS";

  public resolved(captchaResponse: string): void {
    this.captchaResponsVar = captchaResponse;
    if (this.captchaResponsVar === undefined) {
      this.captchaRequired = true;
    }
    else {
      this.captchaRequired = false;
    }
  }
  public onError(errorDetails: RecaptchaErrorParameters): void {
    this.captchaError = true;
  }

  get enteredDOB(): Date {
    return this.formService.form.dob;
  }
  set enteredDOB(value: Date) {
    this.formService.form.dob = value;
  }
  get enteredFirstName(): string {
    return this.formService.form.forename;
  }
  set enteredFirstName(value: string) {
    this.formService.form.forename = value;
  }

  get enteredLastName(): string {
    return this.formService.form.surname;
  }
  set enteredLastName(value: string) {
    this.formService.form.surname = value;
  }

  get enteredPostcode(): string {
    return this.formService.form.postcode;
  }
  set enteredPostcode(value: string) {
    this.formService.form.postcode = value;
  }

  get enteredAddress1(): string {
    return this.formService.form.addressLine1;
  }
  set enteredAddress1(value: string) {
    this.formService.form.addressLine1 = value;
  }

  get enteredAddress2(): string {
    return this.formService.form.addressLine2;
  }
  set enteredAddress2(value: string) {
    this.formService.form.addressLine2 = value;
  }
  get enteredAddress3(): string {
    return this.formService.form.AddressLine3;
  }
  set enteredAddress3(value: string) {
    this.formService.form.AddressLine3 = value;
  }

  get enteredTown(): string {
    return this.formService.form.town;
  }
  set enteredTown(value: string) {
    this.formService.form.town = value;
  }
  get enteredShirtSize(): Shirtsizes {
    return this.formService.form.shirtSize;
  }
  set enteredShirtSize(value: Shirtsizes) {
    this.formService.form.shirtSize = value;
    this.shirtSizeDisplayName = value.displayName;
  }

  get enteredEmail(): string {
    return this.formService.form.emailAddress;
  }
  set enteredEmail(value: string) {
    this.formService.form.emailAddress = value;
  }

  get enteredCounty(): string {
    return this.formService.form.county;
  }
  set enteredCounty(value: string) {
    this.formService.form.county = value;
  }

  get enteredCountry(): Countries {
    return this.formService.form.country;
  }
  set enteredCountry(value: Countries) {
    this.formService.form.country = value;
    this.countryName = value.countryName;
  }

  get enteredRetailer(): Retailers {
    return this.formService.form.retailer;
  }
  set enteredRetailer(value: Retailers) {
    this.formService.form.retailer = value;
    this.retailerName = value.retailerName;
  }

  get OptIn(): boolean {
    return this.formService.form.optIn;
  }
  set OptIn(value: boolean) {
    this.formService.form.optIn = value;
  }

  constructor(public shirtsizeService: ShirtSizeService,
    public addressFinderService: AddressFinderService,
    public countryService: CountryService,
    public retailerService: RetailerService,
    public competitionService: CompetitionService,
    public formService: FormService,
    public customerService: CustomerService, private location: Location, private router: Router) {
  }

  ngOnInit(): void {
    if (this.formService.form.competitionId === undefined) {
      this.formService.restoreFromSession();
    }
    if (!this.formService.form.enterPageValid) {
      this.router.navigate(['/enter']);
    }
    this.formService.form.detailsPageValid = false;
    this.formService.saveToSession();

    this.OptIn = false;
    this.LoadCountries();
    this.LoadRetailers();
    this.LoadShirtsizes();
    this.scrollToTop();
  }

  ngAfterViewInit() {

    (function () {
      'use strict';
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
          var $dte = $('.custom-select');
          $('.invalid-feedback').is(':visible') ? $dte.addClass('appended') : $dte.removeClass('appended')
        }, false);
      });
    })();
    selectSetup();
  }

  onSubmit(f: NgForm) {

    if (this.captchaResponsVar === undefined) {
      this.captchaRequired = true;
    }
    else {
      this.captchaRequired = false;
    }

    this.formService.saveToSession();
    if (f.valid && !this.captchaRequired && !this.ageError) {

      this.formService.form.detailsPageValid = true;
      this.formService.saveToSession();
      if (this.enteredCountry.questionsRequired) {
        this.router.navigate(['/questions']);
      }
      else {
        this.addCustomer();
      }
    }
    else {
      this.dataError = true;
    }


  }
  addCustomer() {
    var customer = new Customer();
    customer.CompetitionId = this.formService.form.competitionId;
    customer.UniqueCode = this.formService.form.uniqueCode;
    customer.PrizeId = this.enteredShirtSize.prizeTypeId;
    customer.Forename = this.enteredFirstName;
    customer.Surname = this.enteredLastName;
    customer.AddressLine1 = this.enteredAddress1;
    customer.AddressLine2 = this.enteredAddress2;
    customer.AddressLine3 = this.enteredAddress3;
    customer.Town = this.enteredTown;
    customer.County = this.enteredCounty;
    customer.CountryId = this.enteredCountry.countryId;
    customer.DOB = this.enteredDOB;
    customer.Postcode = this.enteredPostcode;
    customer.EmailAddress = this.enteredEmail;
    if (this.enteredRetailer !== undefined) {
      customer.RetailerId = this.enteredRetailer.retailerId;
    }
    else {
      customer.RetailerId = null;
    }
    customer.OptIn = this.OptIn;
    this.customerService.addCustomer(customer).subscribe(res => {
      if (res == 1) {
        this.dataAdded = true;
      }
      else {
        this.insertError = true;
        if (res == 0) {
          this.message = "We seem to have experienced a technical issue, please enter your details again, sorry for any inconvenience.";
        }
        if (res == 2) {
          this.message = "This code has been redeemed previously.";
        }
        if (res == 3) {
          this.message = "Prize Unavailable.";
        }
      }
    }, error => this.dataError = true);
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  LoadShirtsizes() {
    this.shirtsizeService.LoadShirtsizes(this.formService.form.competitionId).subscribe(res => {
      this.shirtList = res;
      if (this.enteredShirtSize !== undefined) {
        this.selectOption(this.enteredShirtSize.displayName, "shirtSize");
      }

    }, error => this.dataError = true);
  }
  LoadCountries() {
    this.countryService.LoadCountries().subscribe(res => {
      this.countryList = res;
      if (this.enteredCountry !== undefined) {
        this.selectOption(this.enteredCountry.countryName, "country");
      }
    }, error => this.dataError = true);
  }
  LoadRetailers() {
    this.retailerService.LoadRetailers().subscribe(res => {
      this.retailerList = res;
      if (this.enteredRetailer !== undefined) {
        this.selectOption(this.enteredRetailer.retailerName, "retailer");
      }
    }, error => this.dataError = true);
  }
  FindAddress() {
    if (this.enteredPostcode == "") {
      this.showPostcodeError = true;
    }

    this.addressFinderService.FindAdd(this.enteredPostcode).subscribe(res => {
      this.addressList = res;

      if (res != null) {
        this.addressLoaded = true;
      }
      else { this.postcodeError = true; }
    }, error => this.dataError = true);
  }

  getAge(DOB: Date) {

    var today = new Date();
    var birthDate = new Date(DOB);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  checkAge() {
    this.enteredAge = this.getAge(this.enteredDOB);
    if (this.enteredAge < 18) {
      this.ageError = true;
    }
    else {
      this.ageError = false;
    }
  }

  replaceChar() {
    this.enteredFirstName = this.enteredFirstName.replace(/[&\/\\#^+()$~%.'":*?£<>{}!@]/g, '');
    this.enteredLastName = this.enteredLastName.replace(/[&\/\\#^+()$~%.'":*?£<>{}!@]/g, '');
    this.enteredAddress1 = this.enteredAddress1.replace(/[&\/\\#^+()$~%.'":*?£<>{}!@]/g, '');;
    this.enteredAddress2 = this.enteredAddress2.replace(/[&\/\\#^+()$~%.'":*?£<>{}!@]/g, '');;
    this.enteredAddress3 = this.enteredAddress3.replace(/[&\/\\#^+()$~%.'":*?£<>{}!@]/g, '');;
    this.enteredTown = this.enteredTown.replace(/[&\/\\#^+()$~%.'":*?£<>{}!@]/g, '');;
    this.enteredCounty = this.enteredCounty.replace(/[&\/\\#^+()$~%.'":*?£<>{}!@]/g, '');;
  }


  postCodeChange() {

    this.addressLoaded = false;
    this.enteredAddress1 = "";
    this.enteredAddress2 = "";
    this.enteredAddress3 = "";
    this.enteredTown = "";
    this.postcodeError = false;

  }
  address1Change() {
    this.postcodeError = false;
  }

  selectBoxClick(event) {
    /* select box is clicked, close any other select boxes open/close the current select box: */

    event.stopPropagation();
    this.closeAllSelect(event.currentTarget);
    event.currentTarget.nextSibling.classList.toggle("select-hide");
    event.currentTarget.classList.toggle("select-arrow-active");
  }

  selectOptionClick(event, model) {
    this.selectOption(event.currentTarget.innerHTML.trim(), model)
    var y, k, h, yl;
    y = event.currentTarget.parentNode.getElementsByClassName("same-as-selected");
    yl = y.length;
    for (k = 0; k < yl; k++) {
      y[k].removeAttribute("class");
    }
    event.currentTarget.setAttribute("class", "same-as-selected");

    h = event.currentTarget.parentNode.previousSibling;
    h.click();
  }

  selectOption(value, model) {
    /* update the original select and the selected item: */
    switch (model) {
      case 'address': {
        this.addressList.forEach(address => {
          if (address.toString() === value) {
            this.enteredAddress = address;
            this.addressDisplay = address.toString();
            this.populateAddress();
          }
        });
        break;
      }
      case 'country': {
        this.countryList.forEach(country => {
          if (country.countryName === value) {
            this.enteredCountry = country;
          }
        });
        break;
      }
      case 'retailer': {
        this.retailerList.forEach(retailer => {
          if (retailer.retailerName === value) {
            this.enteredRetailer = retailer;
          }
        });
        break;
      }
      case 'shirtSize': {
        this.shirtList.forEach(shirtSize => {
          if (shirtSize.displayName === value) {
            this.enteredShirtSize = shirtSize;
          }
        });
        break;
      }
    }
  }

  closeAllSelect(element) {
    /* close all select boxes in the document except the current select box: */
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (element == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }

  populateAddress() {

    let addressSelected = this.enteredAddress;
    let commas = addressSelected.length;
    let addresses = commas + 1;

    if (addresses == 3) {
      this.enteredAddress1 = addressSelected[0];
      this.enteredTown = addressSelected[1];
    }

    else if (addresses == 4) {
      this.enteredAddress1 = addressSelected[0];
      this.enteredTown = addressSelected[1];
    }

    else {
      this.enteredAddress1 = addressSelected[0];
      this.enteredAddress2 = addressSelected[1];
      this.enteredTown = addressSelected[addressSelected.length - 2];
      let addressupToTown = addressSelected.length - 3;
      this.enteredAddress3 = "";
      let numberOfAddressesRemaining = addresses - 4;
      if (numberOfAddressesRemaining > 0) {
        for (let i = 2; i <= addressupToTown; i++) {
          this.enteredAddress3 = this.enteredAddress3 + addressSelected[i] + ", ";
        }
        let comma = this.enteredAddress3.lastIndexOf(",");
        this.enteredAddress3 = this.enteredAddress3.substring(0, comma);

      }


    }

  }
}



