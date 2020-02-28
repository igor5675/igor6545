import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FirstPageComponent } from './pages/first/first.component';
import { SecondPageComponent } from './pages/second/second.component';
import { AddNewPassengerComponent } from './pages/passengers/add-new-passenger.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';

import { NgxsModule } from '@ngxs/store';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { PassengersState } from './states/passengers.state';
import { PassengersService } from './services/passengers.service';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
    AddNewPassengerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    NgxsModule.forRoot(),
    NgxsModule.forFeature([
      PassengersState
    ]),

    NgxsRouterPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [
    PassengersService
  ],
  entryComponents:[
    AddNewPassengerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
