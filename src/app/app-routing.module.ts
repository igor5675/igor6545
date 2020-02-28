import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstPageComponent } from './pages/first/first.component';
import { SecondPageComponent } from './pages/second/second.component';

const routes: Routes = [
  { path: 'first', component: FirstPageComponent, pathMatch: 'full' },
  { path: 'second', component: SecondPageComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
