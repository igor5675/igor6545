export class Passenger {
    id: number;
    name: string;
    description: string;
    participation: number;

    constructor(source: any) {
        this.id = source.id;
        this.name = source.name;
        this.description = source.description;
        this.participation = source.participation;
    }
}

export interface PassengersStateModel {  
    passengers: Passenger[];
}
