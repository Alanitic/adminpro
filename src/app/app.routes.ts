import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';



const APP_ROUTES: Routes = [
    { path: '', component: DashboardComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: LoginComponent},
    { path: 'progress', component: ProgressComponent},
    { path: 'graficas1', component: Graficas1Component},
    { path: '', redirectTo: '', pathMatch: 'full'},
    { path: '**', component: NopagefoundComponent}
];

export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES, { useHash: true } );