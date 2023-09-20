interface Subject<T> {
  registerObserver(o: Observer<T>): void;
  removeObserver(o: Observer<T>): void;
  notifyObservers(): void;
}

interface Observer<T> {
  update(value: T): void;
}

type Temperature = number;

class WeatherStation implements Subject<Temperature> {
  private temperature!: Temperature;
  private observers: Observer<Temperature>[] = [];

  setTemperature(temp: Temperature) {
    console.log("WeatherStation: new temperature measurement: " + temp);
    this.temperature = temp;
    this.notifyObservers();
  }

  registerObserver(o: Observer<Temperature>): void {
    this.observers.push(o);
  }

  removeObserver(o: Observer<Temperature>): void {
    // const index = this.observers.indexOf(o);
    // this.observers.splice(index, 1);

    this.observers = this.observers.filter((obs) => obs !== o);
  }

  notifyObservers(): void {
    this.observers.forEach((observer) => {
      observer.update(this.temperature);
    });
  }
}

class TemperatureDisplay implements Observer<Temperature> {
  private subject!: Subject<Temperature>;

  constructor(weatherStation: WeatherStation) {
    this.subject = weatherStation;
    weatherStation.registerObserver(this);
  }

  update(temp: Temperature): void {
    console.log("Temperature Display: ", temp);
  }
}

class ThermostatController implements Observer<Temperature> {
  private subject!: Subject<Temperature>;

  constructor(weatherStation: WeatherStation) {
    this.subject = weatherStation;
    weatherStation.registerObserver(this);
  }

  update(temp: Temperature): void {
    console.log("Thermostat: ", temp);
    if (temp > 25) console.log("Turn on AC");
    else console.log("Turn off AC");
  }
}

/// Usage
let weatherStation = new WeatherStation();

let tempDisplay = new TemperatureDisplay(weatherStation);
let thermostat = new ThermostatController(weatherStation);

weatherStation.setTemperature(27);
weatherStation.setTemperature(12);
