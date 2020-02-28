import { Component, OnInit, Inject } from '@angular/core';

import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

import { Store, Select } from '@ngxs/store';
import { AddPassenger, SavePassenger } from '../../actions/passengers.actions';
import { PassengersState } from 'src/app/states/passengers.state';
import { Passenger } from '../../models/master-data.model';

@Component({
    templateUrl: './edit-passenger.component.html',
    styleUrls: ['./edit-passenger.component.scss']
})
export class EditPassengerComponent implements OnInit {

    passenger: Passenger = null;
    passengerName: string = '';

    constructor(private store: Store, private passengersState: PassengersState, private dialogRef: MatDialogRef<EditPassengerComponent>, @Inject(MAT_DIALOG_DATA) data) {
        this.passenger = data.passenger;
        console.log('this.passenger: ', this.passenger);
    }

    ngOnInit() {
        this.passengerName = this.passenger.name;
    }

    savePassenger() {
        if(this.passengerName != '') {
            this.passenger.name = this.passengerName;
            this.store.dispatch(new SavePassenger(this.passenger.id, this.passenger.name, this.passenger.description, this.passenger.participation)).subscribe((state: PassengersState) => {
                this.passengerName = "";
                this.dialogRef.close();
            });
        }



    }

}
