let on = false

setInterval(function() {
  const isButtonPressed = BTN1.read()
  on = isButtonPressed ? !on : false

  LED1.write(on);
}, 150);