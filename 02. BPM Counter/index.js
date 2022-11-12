const led = require('@amperka/led').connect(P0)
const buzzer = require('@amperka/buzzer').connect(P5)
const button = require('@amperka/button').connect(P6)
const regulator = require('@amperka/pot').connect(A0)

const FRAME_RATE = 24
const interval = 1000 / FRAME_RATE

button.on('press', () => {
  buzzer.toggle(true)
  led.turnOn()
  console.log(`Press`)
});

button.on('release', () => {
  buzzer.toggle(false)
  led.turnOff()
  console.log(`Release`)
});

setInterval(() => {
  led.brightness(1 - regulator.read());
}, interval)
