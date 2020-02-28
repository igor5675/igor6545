import { Component, OnInit } from '@angular/core';

import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

import { Store, Select } from '@ngxs/store';
import { AddPassenger } from '../../actions/passengers.actions';
import { PassengersState } from 'src/app/states/passengers.state';

@Component({
    templateUrl: './add-new-passenger.component.html',
    styleUrls: ['./add-new-passenger.component.scss']
})
export class AddNewPassengerComponent implements OnInit {

    passengerName: string = '';

    constructor(private store: Store, private passengersState: PassengersState, private dialogRef: MatDialogRef<AddNewPassengerComponent>,) {}

    ngOnInit() {

    }

    addNewPassenger() {
        if(this.passengerName != '') {
            this.store.dispatch(new AddPassenger(0, this.passengerName, '', 0)).subscribe((state: PassengersState) => {
                this.passengerName = "";
                this.dialogRef.close();
            });
        }
    }

}
