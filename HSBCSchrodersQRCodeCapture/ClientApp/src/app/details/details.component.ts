import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { FormService } from "../services/form.service";
import { InvestorService } from '../services/investor.service';
import { Investor } from "../viewModels/investor.viewmodel";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['../app.component.css', './details-component.css']
})
export class DetailsComponent implements OnInit {

  public investorCode: number = 0;
  public dataError = false;
  public errorMessage = "";
  public InvestorID: string = "";
  public emailAddress: string = "";
  public CountryCode: string = "";
  public PhoneNumber: string = "";
  public isChecked: boolean = false;

  public showCountryCodeError: boolean = false;
  public submitAttempted: boolean = false;

  constructor(
    private formService: FormService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute,
    private investorService: InvestorService
  ) { }

  ngOnInit(): void {
    if (!this.formService.form.investorID) {
      this.router.navigate(['/enter']);
    }
  }

  onSubmit(f: NgForm) {
    this.submitAttempted = true;
    Object.keys(f.controls).forEach(field => {
      const control = f.controls[field];
      control.markAsTouched({ onlySelf: true });
    });

    if (f.valid) {
      this.investorCode = +this.formService.form.investorID;
      this.validateCountryCode();

      if (!this.showCountryCodeError) {
        const investorData: Investor = {
          Id: 0,
          InvestorID: (this.investorCode).toString(),
          EmailAddress: this.emailAddress,
          CountryCode: this.CountryCode,
          PhoneNumber: this.PhoneNumber
        };

        this.investorService.addInvestor(investorData).subscribe(
          response => {
            this.router.navigate(['/thank-you']);
          },
          error => {
            this.dataError = true;
            if (error.status === 400) {
              this.errorMessage = 'There was an issue with the data you submitted. Please check the fields and try again.';
            } else {
              this.errorMessage = 'There was an error submitting your details. Please try again.';
            }
          }
        );
      }
    }
  }

  onPhoneNumberChange() {
    if (this.submitAttempted) {
      this.validateCountryCode();
    }
  }

  onCodeChange() {
    if (this.submitAttempted) {
      this.validateCountryCode();
    }
  }

  validateCountryCode(): void {
    const hasPhone = this.PhoneNumber && this.PhoneNumber.trim().length > 0;
    const hasCode = this.CountryCode && this.CountryCode.trim().length > 0;
    this.showCountryCodeError = this.submitAttempted && hasPhone && !hasCode;
  }
}
