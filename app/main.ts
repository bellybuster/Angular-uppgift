<<<<<<< HEAD
// Imports for loading & configuring the in-memory web api
import { provide }    from '@angular/core';
// The usual bootstrapping imports
import { bootstrap }      from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent }   from './app.component';

bootstrap(AppComponent, [
    HTTP_PROVIDERS     // in-mem server data
]);
=======
import { bootstrap }     from '@angular/platform-browser-dynamic';
import { AppComponent }  from './app.component';

import { HTTP_PROVIDERS } from '@angular/http';

bootstrap( AppComponent, [
    HTTP_PROVIDERS
]);
>>>>>>> 9730b420246f7f3defe0a82d5f0f98b17f0b022c
