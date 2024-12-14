import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EjerciciosComponent } from './components/ejercicios/ejercicios.component';
import { RutinaComponent } from './components/rutina/rutina.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'ejercicios', component: EjerciciosComponent },
    { path: 'rutina', component: RutinaComponent }
];
