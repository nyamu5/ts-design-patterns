// Abstract Classes
abstract class Car {
  public description!: string;

  public getDescription(): string {
    return this.description;
  }

  public abstract cost(): number;
}

abstract class CarOptions extends Car {
  decoratedCar!: Car;
  public abstract getDescription(): string;
  public abstract cost(): number;
}

// Car Options
class EnhancedAutoPilot extends CarOptions {
  constructor(car: Car) {
    super();
    this.decoratedCar = car;
  }
  decoratedCar: Car;

  public getDescription(): string {
    return this.decoratedCar.getDescription() + ", Enhanced AutoPilot";
  }
  public cost(): number {
    return this.decoratedCar.cost() + 5000;
  }
}

class PerformanceTires extends CarOptions {
  constructor(car: Car) {
    super();
    this.decoratedCar = car;
  }
  decoratedCar: Car;

  public getDescription(): string {
    return this.decoratedCar.getDescription() + ", Performance Tires";
  }
  public cost(): number {
    return this.decoratedCar.cost() + 2000;
  }
}

// Car Models
class ModelS extends Car {
  public description = "Model S";

  public cost(): number {
    return 70000;
  }
}

class ModelX extends Car {
  public description = "Model X";

  public cost(): number {
    return 72000;
  }
}

// Usage
let myTesla = new ModelS();
myTesla = new EnhancedAutoPilot(myTesla);
myTesla = new PerformanceTires(myTesla);

console.log({ cost: myTesla.cost(), description: myTesla.getDescription() });
