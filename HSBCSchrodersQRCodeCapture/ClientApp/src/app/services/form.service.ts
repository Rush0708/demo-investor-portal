import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Form } from "../viewModels/form.viewmodel";


@Injectable()


export class FormService {
  form = new Form();

  constructor() {

  }

  saveToSession() {
    if (typeof (sessionStorage) !== "undefined") {
      sessionStorage.setItem('claimYourShirtForm', JSON.stringify(this.form))
    }
  }

  restoreFromSession() {
    if (typeof (sessionStorage) !== "undefined") {
      if (sessionStorage.length > 0) {
        var storedForm = sessionStorage.getItem('claimYourShirtForm');
        if (storedForm !== null) {
          this.form = JSON.parse(storedForm);
        }
      }
    }
  }

  clearSession() {
    if (typeof (sessionStorage) !== "undefined") {
      sessionStorage.clear();
    }
  }
}
