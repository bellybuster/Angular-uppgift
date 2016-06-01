import { Component } from '@angular/core';
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

    }
}
