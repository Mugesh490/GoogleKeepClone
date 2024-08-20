import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
// import { BirthdayDetailsComponent } from './birthday-details/birthday-details.component';
import { RemainderComponent } from './components/remainder/remainder.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotesContainerComponent } from './components/notes-container/notes-container.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import { AuthGuard } from './service/auth/auth.guard';

const appRoutes: Routes = [
    { 
        path: 'register',
        component: RegisterComponent,

    },
    {path:'login', component:LoginComponent},
    //{path:'birthdayDetails',component:BirthdayDetailsComponent},
    {
        path:'',
        component:DashboardComponent,
        canActivate:[AuthGuard],
        children:[
            {
                path:'notes',
                component:NotesContainerComponent
            },
            {
                path:'archive',
                component:ArchiveComponent
            },
            {
                path:'trash',
                component:TrashComponent
            },
            {
                path:'remainder',
                component:RemainderComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}