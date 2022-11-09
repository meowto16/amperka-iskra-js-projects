let on = false;
setInterval(() => {
  on = !on;
  LED1.write(on);
}, 500);