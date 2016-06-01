import { Component } from '@angular/core';
import { APIService } from './api.service';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    providers: [ APIService ]
})

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
    }
}
