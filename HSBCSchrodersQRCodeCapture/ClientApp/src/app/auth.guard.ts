import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FormService } from './services/form.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private formService: FormService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {

    // Check if form was validated during sign-in
    if (this.formService.form.enterPageValid) {
      return true;
    }

    // If not, redirect to sign-in and reset session
    this.formService.clearSession(); // clears investor ID and validation
    this.router.navigate(['/enter']);
    return false;
  }
}
