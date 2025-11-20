import { Component, OnInit } from '@angular/core';
import { FormService } from "../services/form.service";
import { Form } from "../viewModels/form.viewmodel";
import { Router } from '@angular/router';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['../app.component.css']
})
export class ThankyouComponent implements OnInit {

  form: Form;

  constructor(
    private formService: FormService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new Form();
    this.formService.clearSession();
  }

  handleBackButton(): void {
    this.formService.clearSession();
    this.router.navigate(['/enter']);
  }
}
