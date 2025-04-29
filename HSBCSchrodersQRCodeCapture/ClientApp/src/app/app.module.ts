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
import { CompetitionService } from './services/competition.service';
import { CompetitionRepository } from './repositories/competition.repository';
import { DetailsComponent } from './details/details.component';
import { ShirtSizeService } from "./services/shirtsize.service";
import { ShirtSizeRepository } from "./repositories/shirtsize.repository";
import { CountryService } from "./services/country.service";
import { CountryRepository } from "./repositories/country.repository";
import { RetailerService } from "./services/retailer.service";
import { RetailerRepository } from "./repositories/retailer.repository";
import { AddressFinderService } from "./services/addressfinder.service";
import { AddressFinderRepository } from "./repositories/addressfinder.repository";
import { CustomerService } from "./services/customer.service";
import { CustomerRepository } from "./repositories/customer.repository";
import { FormService } from './services/form.service';
import { ThankyouComponent } from './thank-you/thank-you.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionAnswerService } from "./services/question.and.answer.service";
import { QuestionAnswerRepository } from "./repositories/question.and.answer.repository";
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
    QuestionsComponent,
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
    CompetitionService,
    InvestorService,
    InvestorRepository,
    CompetitionRepository,
    ShirtSizeService,
    ShirtSizeRepository,
    CountryService,
    CountryRepository,
    RetailerService,
    RetailerRepository,
    AddressFinderRepository,
    AddressFinderService,
    CustomerService,
    CustomerRepository,
    QuestionAnswerService,
    QuestionAnswerRepository,
    FormService,
    InvestorDataRepository,
    InvestorDataService
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
