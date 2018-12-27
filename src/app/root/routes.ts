import { StudentComponent } from '../student/student.component';
import { NotFoundComponent } from './not-found.component';
import { HomeComponent } from '../home/home.component';
import { CoursesComponent } from '../courses/courses.component';
import { Routes } from '@angular/router';

export const appRoutes:Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'student',
        component: StudentComponent
    },
    {
        path: 'courses',
        component: CoursesComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

