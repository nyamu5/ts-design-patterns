class BluRayPlayer {
  on() {
    console.log("Turning on BluRay Player...");
  }

  off() {
    console.log("Turning off BluRay Player...");
  }

  play() {
    console.log("Playing media...");
  }
}

class SoundSystem {
  on() {
    console.log("Turning on Sound System...");
  }

  off() {
    console.log("Turning off Sound System...");
  }

  setAudioSource(source: string) {
    console.log("Setting audio source to: ", source);
  }

  setVolume(volume: number) {
    console.log("Setting volume level to: ", volume);
  }
}

class Lights {
  dim() {
    console.log("Dimming lights");
  }
}

class TV {
  on() {
    console.log("Turning on TV...");
  }

  off() {
    console.log("Turning off TV...");
  }
}

class HomeTheaterFacade {
  private bluRayPlayer: BluRayPlayer;
  private soundSystem: SoundSystem;
  private lights: Lights;
  private tv: TV;

  constructor({
    bluRayPlayer,
    soundSystem,
    lights,
    tv,
  }: {
    bluRayPlayer: BluRayPlayer;
    soundSystem: SoundSystem;
    lights: Lights;
    tv: TV;
  }) {
    this.bluRayPlayer = bluRayPlayer;
    this.lights = lights;
    this.soundSystem = soundSystem;
    this.tv = tv;
  }

  public watchMovie() {
    this.tv.on();
    this.lights.dim();
    this.tv.on();
    this.soundSystem.on();
    this.soundSystem.setAudioSource("movie");
    this.soundSystem.setVolume(11);
    this.bluRayPlayer.play();
  }

  public endMovie() {
    this.soundSystem.off();
    this.tv.off();
    this.bluRayPlayer.off();
  }
}

//
let bluRayPlayer = new BluRayPlayer();
let soundSystem = new SoundSystem();
let lights = new Lights();
let tv = new TV();

let homeTheater = new HomeTheaterFacade({
  tv,
  lights,
  soundSystem,
  bluRayPlayer,
});
homeTheater.watchMovie();
homeTheater.endMovie();
