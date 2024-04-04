import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetLoginComponent } from './planet-login/planet-login.component';
import { FormsModule } from '@angular/forms';
import { PlanetRegComponent } from './planet-reg/planet-reg.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PlanetHomeComponent } from './planet-home/planet-home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavComponent } from './planet_widgets/sidenav/sidenav.component';
import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReproductionComponent } from './reproduction/reproduction.component';
import { GenerationComponent } from './generation/generation.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeedingComponent } from './feeding/feeding.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { EnviornmentComponent } from './enviornment/enviornment.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { SimulationComponent } from './simulation/simulation.component';
@NgModule({
  declarations: [
    AppComponent,
    PlanetLoginComponent,
    PlanetRegComponent,
    PlanetHomeComponent,
    SidenavComponent,
    ReproductionComponent,
    GenerationComponent,
    FeedingComponent,
    EnviornmentComponent,
    SimulationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    HighchartsChartModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
