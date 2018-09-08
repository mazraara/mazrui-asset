import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {ModalModule} from 'ngx-bootstrap';
import {HttpModule} from '@angular/http';
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';
import {NgxPaginationModule} from 'ngx-pagination';
import {SweetAlert2Module} from '@toverux/ngx-sweetalert2';
import {AlertModule} from 'ngx-bootstrap/alert';
import {AuthenticationModule} from './shared';
import {EnvironmentModule} from './shared';
import {FormValidationModule} from './shared';
import {NotificationModule} from './shared';

// Component
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {LoginService} from "./login/login.service";
import {LogoutService} from "./logout/logout.service";
import {NavHeaderComponent} from './nav-header/nav-header.component';
import {LogoutComponent} from './logout/logout.component';
import {SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';
import {ProductService} from "./product/product.service";
import {ProductIndexComponent} from './product/product-index/product-index.component';
import {ProductAddComponent} from './product/product-add/product-add.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        NavHeaderComponent,
        LogoutComponent,
        ProductIndexComponent,
        ProductAddComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        HttpModule,
        AuthenticationModule,
        EnvironmentModule,
        FormValidationModule,
        NotificationModule,
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        ModalModule.forRoot(),
        Ng4LoadingSpinnerModule.forRoot(),
        AlertModule.forRoot(),
        SweetAlert2Module.forRoot(),
        NgxPaginationModule,
        AppRoutingModule,
        SnotifyModule,
        ModalModule.forRoot()
    ],
    providers: [
        ProductService,
        LoginService,
        LogoutService,
        {provide: 'SnotifyToastConfig', useValue: ToastDefaults},
        SnotifyService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
