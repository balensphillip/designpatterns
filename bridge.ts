interface Workshop {
  work(): void;
}

class Produce implements Workshop {
  work(): void {
    console.log("Produced");
  }
}

class Assemble implements Workshop {
  work(): void {
    console.log(" And");
    console.log(" Assembled.");
  }
}

 abstract class Vehicle {
  protected workShop1: Workshop;
  protected workShop2: Workshop;
  constructor(workShop1: Workshop, workShop2: Workshop) {
    this.workShop1 = workShop1;
    this.workShop2 = workShop2;
  }
  manufacture() {}
}

class Car extends Vehicle {
  manufacture() {
    console.log("Car");
    this.workShop1.work();
    this.workShop2.work();
  }
}

class Bike extends Vehicle {
  manufacture() {
    console.log("Bike ");
    this.workShop1.work()
    this.workShop2.work();
  }
}

let vehicle1 = new Car(new Produce, new Assemble);
let vehicle2 = new Bike(new Produce, new Assemble );
vehicle1.manufacture()
console.log("----------------------------------");
vehicle2.manufacture()
