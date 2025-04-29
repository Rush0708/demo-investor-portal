import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormService } from "../services/form.service";
import { InvestorDataService } from "../services/investorData.service";
import { NgForm } from '@angular/forms';
import { InvestorData } from '../viewModels/investorData.viewmodel';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['../app.component.css']
})
export class EnterComponent implements OnInit, AfterViewInit {

  public dataError1 = false;  // Invalid investor code (404)
  public dataError2 = false;  // Details already present (400)
  public errorMessage = "";
  public investorName = "Umbro Shirt Investor";

  constructor(
    private formService: FormService,
    private investorDataService: InvestorDataService,
    private router: Router
  ) { }

  get enteredInvestorCode(): string {
    return this.formService.form.investorID;
  }

  set enteredInvestorCode(value: string) {
    this.formService.form.investorID = value;
  }

  ngOnInit(): void {
    if (!this.formService.form.enterPageValid) {
      this.formService.clearSession();
    }
  }

  ngAfterViewInit(): void {
    (() => {
      'use strict';
      const forms = document.getElementsByClassName('needs-validation');
      Array.prototype.forEach.call(forms, (form: any) => {
        form.addEventListener('submit', function (event: Event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    })();
  }

  onSubmit(f: NgForm): void {
    if (f.valid) {
      this.checkInvestorData();
    }
  }

  onCodeChange(): void {
    this.dataError1 = false;
    this.dataError2 = false;
    this.errorMessage = "";
    this.formService.form.enterPageValid = false;
    this.formService.saveToSession();
  }

  checkInvestorData(): void {
    const investorCode = this.formService.form.investorID;
    const investor: InvestorData = {
      Id: null,
      InvestorID: investorCode
    };

    this.investorDataService.CheckInvestordata(investor).subscribe(
      res => {
        if (res.isValid) {
          this.formService.form.enterPageValid = true;
          this.formService.saveToSession();
          this.router.navigate(['/details']);
        } else {
          // Normally shouldn't hit this if API returns 400/404 correctly
          this.showInvalidInvestorError();
        }
      },
      error => {
        if (error.status === 404) {
          this.showInvalidInvestorError();
        } else if (error.status === 400) {
          this.showDetailsAlreadyPresentError();
        } else {
          // Generic fallback
          this.dataError1 = true;
          window.location.href = "sorry";
        }
      }
    );
  }

  private showInvalidInvestorError(): void {
    this.dataError1 = true;
    this.dataError2 = false;
    this.errorMessage = "Details not found – please check your statement for your Investor ID.";
  }

  private showDetailsAlreadyPresentError(): void {
    this.dataError1 = false;
    this.dataError2 = true;
    this.errorMessage = "Details are already present for this user.";
  }
}
