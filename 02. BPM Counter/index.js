const led = require('@amperka/led').connect(P0);
const buzzer = require('@amperka/buzzer').connect(P5)
const button = require('@amperka/button').connect(P6)

led.brightness(0.4)

button.on('press', () => {
  buzzer.toggle(true);
  led.turnOn();
  console.log(`Press`)
});

button.on('release', () => {
  buzzer.toggle(false);
  led.turnOff();
  console.log(`Release`)
});
