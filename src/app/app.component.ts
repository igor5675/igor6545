import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog'

import { AddNewPassengerComponent } from './pages/passengers/add-new-passenger.component';
import { EditPassengerComponent } from './pages/passengers/edit-passenger.component';
import { Observable, Subscription } from 'rxjs';
import { Passenger } from './models/master-data.model';
import { Store, Select } from '@ngxs/store';
import { PassengersState } from './states/passengers.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private passengesSub: Subscription;
  passengers$: Observable<Passenger[]>;
  @Select(PassengersState.passengers) passengers: Observable<Passenger[]>;

  //passengers: Passenger[] = [];

  constructor(private dialog: MatDialog, private store: Store) {
    this.passengers$ = this.store.select(state => state.passengers);
  }

  addNewPassenger() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    this.dialog.open(AddNewPassengerComponent, dialogConfig);
  }

  editPassenger(passenger: Passenger) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      passenger: passenger
    };

    this.dialog.open(EditPassengerComponent, dialogConfig);
  }

  ngOnInit() {
    this.passengers.subscribe((passengers: Passenger[]) => {
      //this.passengers = passengers;
      console.log('passengers: ', passengers);
    });    
  }

  title = 'presentation-app';
}
