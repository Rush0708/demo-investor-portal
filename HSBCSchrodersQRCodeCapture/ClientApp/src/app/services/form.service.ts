import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  form: any = { investorID: '' };
  private timeoutId: any;
  private readonly TIMEOUT_DURATION = 15 * 60 * 1000;

  sessionTimedOut$: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  clearSession(): void {
    this.form = { investorID: '' };
    localStorage.clear();
    sessionStorage.clear();
  }

  startSessionTimer(): void {
    this.clearExistingTimer();

    this.timeoutId = setTimeout(() => {
      this.clearSession();
      this.sessionTimedOut$.next(true);
    }, this.TIMEOUT_DURATION);
  }

  resetSessionTimer(): void {
    this.startSessionTimer();
  }

  clearExistingTimer(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  saveToSession(): void {
    
  }

  loadFromSession(): any {
    return null;
  }
}
