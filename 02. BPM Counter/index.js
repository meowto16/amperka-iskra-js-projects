const buzzer = require('@amperka/buzzer').connect(P5)
const button = require('@amperka/button').connect(P6)

button.on('press', () => buzzer.toggle(true))
button.on('release', () => buzzer.toggle(false))
// buzzer.beep(0.1, 1)