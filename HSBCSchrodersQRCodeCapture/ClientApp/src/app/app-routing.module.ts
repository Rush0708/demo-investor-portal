import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from './auth.guard';
import { EnterComponent } from './enter/enter.component';
import { DetailsComponent } from './details/details.component';
import { ThankyouComponent } from './thank-you/thank-you.component';
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
    canActivate: [AuthGuard]
  },
  {
    path: "thank-you",
    component: ThankyouComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "sorry",
    component: SorryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "",
    redirectTo: "enter",
    pathMatch: "full"
  },
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
