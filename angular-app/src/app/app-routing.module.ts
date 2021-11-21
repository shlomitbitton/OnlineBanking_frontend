import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { HomeComponent } from './home/home.component';
import { AccountsComponent } from './accounts/accounts.component';
import { TransactionRegisterComponent } from './transaction-register/transaction-register.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
    { path: '', component: LoginComponent }, //canActivated , RouteGuardService
    { path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent , canActivate:[RouteGuardService]},
    { path: 'accounts', component: AccountsComponent , canActivate:[RouteGuardService]},
    { path: 'transaction-register', component: TransactionRegisterComponent , canActivate:[RouteGuardService]},
    { path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService]},
    { path: 'admin', component: AdminComponent , canActivate:[RouteGuardService]},
    { path: '**', component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
