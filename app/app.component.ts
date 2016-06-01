import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { AllAccountsComponent }  from './all-accounts.component';
import { APIService } from './api.service';



@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    APIService
  ]
})
@RouteConfig([
 { path: '/',  name: 'Home',  component: AppComponent, useAsDefault: true },
  { path: '/AllAccounts', name: 'All Accounts', component: AllAccountsComponent }
])
export class AppComponent {
    data: Object = { };
    title:string = 'Dromedar';
    apples:number = 4;

    constructor( private API: APIService ) { }

    formSubmit() {
        sessionStorage.setItem('apiUrl', 'http://crmweb.cintutv.se/CWP2');
        var username = this.data.username,
            password = this.data.password;
    }

    oliver() {
        this.API
            .login('utb', '123')
            .done(function(res) {
                console.log(res);
            });
    }
}