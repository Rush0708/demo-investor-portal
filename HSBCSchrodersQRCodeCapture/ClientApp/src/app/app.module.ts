import { BrowserModule } from '@angular/platform-browser';
import { RecaptchaModule } from "ng-recaptcha";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { EnterComponent } from './enter/enter.component';
import { DetailsComponent } from './details/details.component';
import { CountryService } from "./services/country.service";
import { CountryRepository } from "./repositories/country.repository";
import { AddressFinderService } from "./services/addressfinder.service";
import { AddressFinderRepository } from "./repositories/addressfinder.repository";
import { FormService } from './services/form.service';
import { ThankyouComponent } from './thank-you/thank-you.component';
import { SorryComponent } from './sorry/sorry.component';
import { InvestorService } from './services/investor.service';
import { InvestorRepository } from "./repositories/investor.repository";
import { InvestorDataRepository } from './repositories/investorData.repository';
import { InvestorDataService } from './services/investorData.service';
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    EnterComponent,
    DetailsComponent,
    ThankyouComponent,
    SorryComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RecaptchaModule 
  ],
  providers: [
    InvestorService,
    InvestorRepository,
    CountryService,
    CountryRepository,
    AddressFinderRepository,
    AddressFinderService,
    FormService,
    InvestorDataRepository,
    InvestorDataService
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
