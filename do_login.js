require('chromedriver');
var webdriver = require('selenium-webdriver');

(async function myFunction() {
  let driver = await new webdriver.Builder().forBrowser('chrome').build();
  
  // ir a workera
  await driver.get('http://192.168.20.55:3000/app');

  // obtener el input email
  var email = await driver.findElement(webdriver.By.id('tr-login-text-email'))
  // agregar texto
  email.sendKeys('usuario@qwantec.com')

  // Obtener input login
  var pass = await driver.findElement(webdriver.By.id('tr-login-text-password'))
  // enviar texto y hacer enter
  pass.sendKeys('user', webdriver.Key.ENTER)
  
})();