export class AddPassenger {
    static readonly type = '[Passenger] Add Passenger';
    constructor(public id: number, public name: string, public description: string, public participation: number) {}
}

export class GetPassengers {
    static readonly type = '[Passengers] Get Passengers';
}