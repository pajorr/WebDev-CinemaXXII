import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { HomeComponent } from'./home/home.component';
import { TheatreComponent } from'./theatre/theatre.component';
import { AboutComponent } from'./about/about.component';
import { LoginComponent } from'./login/login.component';
import { SignupComponent } from'./signup/signup.component';
import { TransactionComponent } from'./transaction/transaction.component';
import { UserComponent } from'./user/user.component';
import { AuthGuard } from './auth.guard'

const routes: Routes = [
	{ path: 'book', component: BookComponent, canActivate: [AuthGuard] },
	{ path: 'home', component: HomeComponent },
	{ path: 'theatre', component: TheatreComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'transaction', component: TransactionComponent, canActivate: [AuthGuard]},
	{ path: 'user', component: UserComponent, canActivate: [AuthGuard] },
	{ path: '', component: HomeComponent},
	{ path: '**', redirectTo: '' }

]

@NgModule({
	exports: [RouterModule],
	imports: [ RouterModule.forRoot(routes) ],
	providers: [AuthGuard],
})
export class AppRoutingModule { }
