import { Injectable, EventEmitter, Optional } from "@angular/core";
import { Store } from '@ngxs/store';
import { Observable } from "rxjs";
import { Observer } from "rxjs";
import { Subject } from 'rxjs';

import { Passenger } from '../models/master-data.model';

@Injectable()
export class PassengersService { 

    GetPassengers(): Passenger[] {
        return [{
            id: 1,
            name: 'Darien Fawkes',
            description: '',
            participation: 1
        }, {
            id: 2,
            name: 'Logan Cale',
            description: '',
            participation: 2
        }];
    }  
}
