import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetLoginComponent } from './planet-login/planet-login.component';
import { PlanetRegComponent } from './planet-reg/planet-reg.component';
import { PlanetHomeComponent } from './planet-home/planet-home.component';
import { GenerationComponent } from './generation/generation.component';

const routes: Routes = [
  {path:"login",component:PlanetLoginComponent},
  {path:"reg",component:PlanetRegComponent},
  {path:"",pathMatch:"full",redirectTo:"login"},
  {path:'planethome',component:PlanetHomeComponent},
  {path:"generation",component:GenerationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
