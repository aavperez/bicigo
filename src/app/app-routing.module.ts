import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PublishComponent } from './components/publish/publish.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from  './guards/login.guard';
import { ListComponent } from './components/list/list.component';



const routes: Routes = [
  {
    path: "home",
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
  },
  {
    path: "publish",
    loadChildren: () => import('./components/publish/publish.module').then(m => m.PublishModule),
    canActivate: [LoginGuard],
  },
  {
    path: "search",
    loadChildren: () => import('./components/search/search.module').then(m => m.SearchModule),
  },
  {
    path:  'admin',
    children: [
        { path:  'login',component:  LoginComponent},
        { path:  'register', component:  RegisterComponent },
    ]
  },
  {
    path: 'list', component: ListComponent
  },
  {path: "", redirectTo: 'home', pathMatch: 'full'},
  {path: "**", redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
