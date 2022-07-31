//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")
class MercurySedan extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
    
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

loadPassenger(num) {
    if (this.passenger < this.maximumPassengers) {
        if ((num + this.passenger) <= this.maxPassengers) {
            return this.passenger;
        }
    }
    // (passenger less than maximumPassengers then availableRoom == true)
    // this.passenger > this.maximumPassengers then availableRoom == true
}
start() {
    if (this.fuel > 0) {
        return this.started = true;
        console.log("engine started...!!!");
    } else {
        return this.started = false;
        console.log("engine cannot start...");
    }
}
    // (fuel is greater than 0, then start == true)

scheduleService(mileage) {
    if (this.mileage > 30000) {
        this.scheduleService = true;
        return this.scheduleService;
        }
    // (mileage is greater than 30000, time for maintenance == true)
    }
}

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
