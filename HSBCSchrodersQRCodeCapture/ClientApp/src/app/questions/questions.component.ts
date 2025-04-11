import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";
import { Questions } from '../viewModels/questions.and.answers.viewmodel';
import { Answers } from '../viewModels/questions.and.answers.viewmodel';
import { QuestionAnswerService } from "../services/question.and.answer.service";
import { CustomerService } from "../services/customer.service";
import { FormService } from "../services/form.service";
import { Customer } from "../viewModels/customer.viewmodel";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['../app.component.css']
})

export class QuestionsComponent implements OnInit {

  public dataError;
  public maxQuestions = 3;
  public question: string;
  public selectedAnswer: Answers;
  public attemptMessage = "";
  public wrongAnswer=false;
  public dataAdded = false;
  public insertError = false;
  public message: string;
  public answerErrorMessage: boolean;
  get answerList(): Answers[] {
    return this.formService.form.answerList;
  }
  set answerList(value: Answers[]) {
    this.formService.form.answerList = value;
  }

  constructor(public questionAnswerService: QuestionAnswerService, private router: Router, public customerService: CustomerService, public formService: FormService) {
    this.question;}
   
  ngOnInit(): void {
    if (this.formService.form.competitionId === undefined) {
      this.formService.restoreFromSession();
    }
    if (!this.formService.form.enterPageValid) {
      this.router.navigate(['/enter']);
    }
    if (!this.formService.form.detailsPageValid || !this.formService.form.country.questionsRequired) {
      this.router.navigate(['/details']);
    }

    if (this.formService.form.questionList === undefined) {
      this.getQuestionslist();
    }
    else {
      // To set message if page is refreshed 
      this.question = this.formService.form.questionList[this.formService.form.questionNumber].question;
      if (this.formService.form.questionNumber > 0) {
        this.attemptMessage = "sorry that answer was incorrect, please try again";
      }
      this.answerList.forEach(answer => answer.selected = false);
    }
  }

  getQuestionslist() {
    this.questionAnswerService.getQuestions(this.formService.form.competitionId).subscribe(res => {
     this.formService.form.questionList = res;
      this.question = this.formService.form.questionList[this.formService.form.questionNumber].question;
      this.getanswersForCurrentQuestion();
    }, error => this.dataError = true);

  }

  getanswersForCurrentQuestion() {
    this.questionAnswerService.getAnswers(this.formService.form.questionList[this.formService.form.questionNumber].questionId).subscribe(res => {
      this.answerList = res;
      this.formService.saveToSession();
    }, error => this.dataError = true);
  }

  onSubmit(f: NgForm) {
    
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.classList.add('was-validated');
    });

    if (f.valid && this.selectedAnswer !== undefined) {
      if (this.selectedAnswer.correctAnswer) {
        this.addCustomer();
      }
      else {
        if (this.formService.form.questionNumber < this.maxQuestions - 1) {
          this.formService.form.questionNumber++;
          this.attemptMessage = "sorry that answer was incorrect, please try again";
          this.question = this.formService.form.questionList[this.formService.form.questionNumber].question;
          this.getanswersForCurrentQuestion();
          this.formService.saveToSession();

          var validation = Array.prototype.filter.call(forms, function (form) {
            form.classList.remove('was-validated');
          });
          this.selectedAnswer = undefined;
        }
        else {
          //this.message = "We’re sorry you cannot claim your shirt on this occasion as all of these questions were answered incorrectly. Please try again. ";
          this.answerErrorMessage = true;
          this.wrongAnswer = true;
        }
      }
    }
  }

  addCustomer() {
    var customer = new Customer();
    customer.CompetitionId = this.formService.form.competitionId;
    customer.UniqueCode = this.formService.form.uniqueCode;
    customer.PrizeId = this.formService.form.shirtSize.prizeTypeId;
    customer.Forename = this.formService.form.forename;
    customer.Surname = this.formService.form.surname;
    customer.AddressLine1 = this.formService.form.addressLine1;
    customer.AddressLine2 = this.formService.form.addressLine2;
    customer.AddressLine3 = this.formService.form.AddressLine3;
    customer.Town = this.formService.form.town;
    customer.County = this.formService.form.county;
    customer.CountryId = this.formService.form.country.countryId;
    customer.DOB = this.formService.form.dob;
    customer.Postcode = this.formService.form.postcode;
    customer.EmailAddress = this.formService.form.emailAddress;
    if (this.formService.form.retailer !== undefined) {
      customer.RetailerId = this.formService.form.retailer.retailerId;
    }
    else {
      customer.RetailerId = null;
    }
    customer.OptIn = this.formService.form.optIn;
    
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


  answerRadioChecked(answer: string) {    
    
    this.answerList.forEach(item => {
      if (item.answer == answer) {
        item.selected = true;
        this.selectedAnswer = item;
      } else {
        item.selected = false;
      }
    })
  }
}
