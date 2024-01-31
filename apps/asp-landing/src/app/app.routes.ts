import { Route } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
    {
        path:'',
        component: AppComponent
    }
    ,{
        path:':route'
        //  listens to any route ever. Could subscribe, listen and show the template that matches.
    }
];
