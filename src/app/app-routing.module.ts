import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageOneComponent} from "./page-one/page-one.component";
import {PageTwoComponent} from "./page-two/page-two.component";
import {DescriptionComponent} from "./description/description.component";
import {EndComponent} from "./end/end.component";

const routes: Routes = [
  {path:'one', component: PageOneComponent},
  {path:'two', component:PageTwoComponent},
  {path:'description', component:DescriptionComponent},
  {path:'end', component:EndComponent},
  {path:'', redirectTo:'/one', pathMatch:'full'},
  {path:'**', redirectTo:'/one', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
