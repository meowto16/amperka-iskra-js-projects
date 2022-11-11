const led = require('@amperka/led').connect(P0);
const buzzer = require('@amperka/buzzer').connect(P5)
const button = require('@amperka/button').connect(P6)

button.on('press', () => {
  buzzer.toggle(true);
  led.turnOn();
});

button.on('release', () => {
  buzzer.toggle(false);
  led.turnOff();
});
