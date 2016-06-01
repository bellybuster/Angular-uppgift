import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { AllAccountsComponent }  from './all-accounts.component';



@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
  ]
=======
import { APIService } from './api.service';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    providers: [ APIService ]
>>>>>>> 9730b420246f7f3defe0a82d5f0f98b17f0b022c
})
@RouteConfig([
 { path: '/',  name: 'Home',  component: AppComponent, useAsDefault: true },
  { path: '/AllAccounts', name: 'All Accounts', component: AllAccountsComponent }
])
export class AppComponent {
    data: Object = { };

    formSubmit() {
        sessionStorage.setItem('apiUrl', 'http://crmweb.cintutv.se/CWP2');
        var username = this.data.username,
            password = this.data.password;

<<<<<<< HEAD
=======
export class AppComponent {
    title:string = 'Dromedar';
    apples:number = 4;

    constructor( private API: APIService ) { }

    oliver() {
        this.API
            .login('utb', '123')
            .done(function(res) {
                console.log(res);
            });
>>>>>>> 9730b420246f7f3defe0a82d5f0f98b17f0b022c
    }
}
