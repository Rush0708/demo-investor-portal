import { Component, OnInit } from '@angular/core';
import { FormService } from "../services/form.service";
import { Form } from "../viewModels/form.viewmodel"

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['../app.component.css']
})

export class ThankyouComponent {
  

  constructor(private formService: FormService) { }

  ngOnInit(): void {
    this.formService.form = new Form();
    this.formService.clearSession();
  }
   

}
