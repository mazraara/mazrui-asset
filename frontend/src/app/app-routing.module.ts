import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {PublicGuard, ProtectedGuard} from 'ngx-auth';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {path: 'login', canActivate: [PublicGuard], component: LoginComponent},
    {path: 'logout', canActivate: [ProtectedGuard], component: LogoutComponent},
    {path: '**', pathMatch: 'full', redirectTo: '/'} // catch any unfound routes and redirect to home page
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}