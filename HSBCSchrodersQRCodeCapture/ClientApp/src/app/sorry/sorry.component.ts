import { Component, OnInit, Input } from '@angular/core';
import { FormService } from "../services/form.service";
import { Form } from "../viewModels/form.viewmodel";

@Component({
  selector: 'app-sorry',
  templateUrl: './sorry.component.html',
  styleUrls: ['../app.component.css']
})

export class SorryComponent implements OnInit {
  @Input() errorMessage: string;
  @Input() answerErrorMessage: boolean;
  

  constructor(private formService: FormService) { }

  ngOnInit(): void {
    this.formService.form = new Form();
    this.formService.clearSession();
  }

}
