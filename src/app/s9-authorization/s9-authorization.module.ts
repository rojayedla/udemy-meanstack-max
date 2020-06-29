import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { AuthorizationComponent } from './authorization/authorization.component';
const routes: Routes = [
  {
    path: '',
    component: AuthorizationComponent
  }
];
@NgModule({
  declarations: [AuthorizationComponent],
  imports: [
    CommonModule
  ]
})
export class S9AuthorizationModule { }
