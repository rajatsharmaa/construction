import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProjectComponent } from './project/project.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
},
{
    path: 'home',
    component: HomeComponent
},
{
    path: 'aboutus',
    component: AboutUsComponent
}, {
    path: 'project',
    component: ProjectComponent
},
{
    path: 'services',
    component: ServicesComponent
},
{
    path: 'contact',
    component: ContactComponent
}, {
    path: 'login',
    component: LoginComponent
}, {
    path: 'register',
    component: RegisterComponent
},
{
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }