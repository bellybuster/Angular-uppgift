import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'api'
})

export class APIService {
    private baseURL:string = 'http://crmweb.cintutv.se/CWP2';

    private token() {
        return sessionStorage.getItem('token');
    }

    private BaseAPISettings(options:any) {
        let baseSettings:any = {
            url: `${this.baseURL}${options.service}`,
            type: options.type,
            cache: false,
            headers: {
                'Authorization': `Bearer ${this.token()}`,
                'X-Requested-With': 'XMLHttpRequest'
            }
        };

        return Object.assign( options, baseSettings );
    }

    login( username:string, password:string ) {
        let settings = this.BaseAPISettings({
            service: '/token',
            type: 'POST',
            data: {
                username: username,
                password: password,
                grant_type: 'password'
            }
        });

        delete settings.headers;
        return $.ajax( settings );
    }

    get( feedName:string, data:any ) {
        let settings = this.BaseAPISettings({
            service: `/API/Feed/${feedName}`,
            type: 'GET',
            data
        });

        return $.ajax( settings );
    }

    ninjaGet( feedName:string, data:any ) {
        let settings = this.BaseAPISettings({
            service: `/API/AnonymousFeed/${feedName}`,
            type: 'GET',
            data
        });

        delete settings.headers;
        return $.ajax( settings );
    }
}