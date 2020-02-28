import { Action, createSelector, State, StateContext, Store, Selector } from '@ngxs/store';
import { Passenger, PassengersStateModel } from '../models/master-data.model';

import { PassengersService } from '../services/passengers.service';
import { GetPassengers, AddPassenger } from '../actions/passengers.actions';

/* */
@State<PassengersStateModel>({
    name: 'passengers',
    defaults: {
        passengers: []
    }
})
export class PassengersState {
    constructor(private passengersService: PassengersService) { }
    /* */
    @Action(AddPassenger) addPassenger(ctx: StateContext<PassengersStateModel>, action: AddPassenger) {
        console.log('--- @Action(AddPassenger) ---');
        const state = ctx.getState();
        let serviceTempData = this.passengersService.GetPassengers();
        console.log('serviceTempData: ', serviceTempData);
        /* Add extra passengers from service */
        if(state.passengers.length == 0) {
            state.passengers = serviceTempData;
        }
        state.passengers.push(action); // Add new passenger
        ctx.setState({
            ...state,
            passengers: [
                ...state.passengers,
                /*...serviceTempData*/
            ]
        });
        
    }
    
    /* */
    @Selector() static passengers(state: PassengersStateModel) {
        console.log('--- @Selector() static passengers ---');
        return state.passengers;
    }

    /* */
    static getData(str: string) {
        return createSelector([PassengersState], (state: PassengersStateModel) => {
            return state.passengers;
        });
    }

}