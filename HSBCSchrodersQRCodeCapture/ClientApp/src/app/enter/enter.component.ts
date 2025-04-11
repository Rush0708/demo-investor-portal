import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormService } from "../services/form.service";
import { CompetitionService } from "../services/competition.service";
import { Competition } from "../viewModels/competition.viewmodel"
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['../app.component.css']
})
export class EnterComponent implements OnInit  {

  public dataError = false;
  public errorMessage = "";
  public competitionName = "Umbro Shirt Competition";
 
  get enteredCompetitioncode(): string {
    return this.formService.form.uniqueCode;
  }
  set enteredCompetitioncode(value: string) {
    this.formService.form.uniqueCode = value;    
  }

  constructor(private formService: FormService, private competitionService : CompetitionService, private router: Router) {   
    
  }

  ngOnInit(): void {  

    if (!this.formService.form.enterPageValid) {
      this.formService.clearSession();
      this.GetCompetitionId(this.competitionName); 
    }
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
        }, false);
      });
    })();
  }

  onSubmit(f: NgForm) {

    if (f.valid) {      
      this.checkCompetitiondata();    
    }   
  }

  onCodeChange() {
    
    this.dataError = false;
    this.formService.form.enterPageValid = false
    this.formService.saveToSession();
  }
  GetCompetitionId(competitionName: string) {
    
    this.competitionService.getCompetitionId(competitionName).subscribe(res => {
      if (res != 0 || res != null) {          

        this.formService.form.competitionId = res;        
      }
    })
  }
  checkCompetitiondata() {
    var competition = new Competition();
    competition.competitionId = this.formService.form.competitionId;
    competition.competitionCode = this.enteredCompetitioncode;  
    this.competitionService.checkCompetitiondata(competition).subscribe(res => {      
      if (res == 1) {
        this.formService.form.enterPageValid = true;
        this.formService.saveToSession();
        this.router.navigate(['/details']);
      }
      else if(res==2){
        this.dataError = true;
        this.errorMessage ="We’re sorry this unique code has already been redeemed, please check you have entered the code as it appears on the golden can. If you still have problems please contact CarlingXUmbro@paragon-cc.co.uk with a photo of the code on the golden can or contact us on 08082810302. "
      }
      else if (res == 3) {
        this.dataError = true;
        this.errorMessage = "YOUR CODE HAS BEEN ENTERED INCORRECTLY, PLEASE CHECK YOU HAVE ENTERED THE CODE AS IT APPEARS ON THE GOLDEN CAN. "
      }
    } );
  }
}
