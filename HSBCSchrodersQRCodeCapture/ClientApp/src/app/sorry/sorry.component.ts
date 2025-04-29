import { Component, OnInit, Input } from '@angular/core';
import { FormService } from "../services/form.service";
import { Form } from "../viewModels/form.viewmodel";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sorry',
  templateUrl: './sorry.component.html',
  styleUrls: ['../app.component.css']
})
export class SorryComponent implements OnInit {
  @Input() errorMessage: string = '';
  @Input() answerErrorMessage: string = '';

  constructor(
    private formService: FormService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formService.form = new Form();
    this.formService.clearSession();
  }

  handleBackButton(): void {
    this.formService.clearSession();
    this.router.navigate(['/enter']);
  }
}
