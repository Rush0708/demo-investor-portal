import { Injectable } from "@angular/core";
import { Form } from "../viewModels/form.viewmodel";

@Injectable({
  providedIn: 'root'
})
export class FormService {
  form: Form = new Form();

  constructor() { }

  saveToSession(): void {
    // Removed as requested
  }

  restoreFromSession(): void {
    // Removed as requested
  }

  clearSession(): void {
    this.form = new Form();
  }
}
