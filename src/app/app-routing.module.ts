import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SneezersComponent } from './sneezers/sneezers.component';
import { StatsComponent } from './stats/stats.component';


const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "sneezers",
    component: SneezersComponent
  },
  {
    path: "stats",
    component: StatsComponent
  },
  {
    path: "**",
    redirectTo: "home"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
