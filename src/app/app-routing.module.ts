import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { BCategoriesComponent } from './b-categories/b-categories.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { NaihustleComponent } from './naihustle/naihustle.component';
 
const routes: Routes = [
  { path: ' ', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'b-categories', component: BCategoriesComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: CategoryDetailComponent },
  { path: 'naihustle', component: NaihustleComponent },

];

@NgModule(
  {
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
