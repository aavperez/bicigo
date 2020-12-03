import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PublishComponent } from './components/publish/publish.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
  {
    path: "home",
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
  },
  {path: "publish", loadChildren: './components/publish/publish.module#PublishModule'},
  {
    path: "search",
    loadChildren: () => import('./components/search/search.module').then(m => m.SearchModule),
  },
  {path: "", redirectTo: 'home', pathMatch: 'full'},
  {path: "**", redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
