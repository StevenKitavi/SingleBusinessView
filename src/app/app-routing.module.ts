import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BCategoriesComponent } from './b-categories/b-categories.component';


const routes: Routes = [
  { path: 'businesses', component: BCategoriesComponent }
];

@NgModule(
  {
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
