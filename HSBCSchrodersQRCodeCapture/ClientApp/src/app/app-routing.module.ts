import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { EnterComponent } from './enter/enter.component';
import { DetailsComponent } from './details/details.component';
import { ThankyouComponent } from './thank-you/thank-you.component';
import { QuestionsComponent } from './questions/questions.component';
import { SorryComponent } from './sorry/sorry.component';

const routes: Routes = [
  {
    path: "enter",
    component: EnterComponent,
    pathMatch: 'full'
  },
  {
    path: "details",
    component: DetailsComponent,
  },
  //{
  //  path: "thank-you",
  //  component: ThankyouComponent,
  //},
  {
    path: "questions",
    component: QuestionsComponent,
  },
  //{
  //  path: "sorry",
  //  component: SorryComponent,
  //},
  {
    path: "**",
    redirectTo: "enter"
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
