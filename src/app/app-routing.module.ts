import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
      { path: '', component: HomeComponent },
    // { path: "create", component: PostCreateComponent, canActivate: [AuthGuard] },
    // { path: "edit/:postId", component: PostCreateComponent, canActivate: [AuthGuard] },
    // { path: "login", component: LoginComponent },
    // { path: "signup", component: SignupComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [ ]
})
export class AppRoutingModule { }
