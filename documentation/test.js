require('chromedriver');
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');

var driver;
var timeout = 15000;

test.describe('login', function () {
  test.bedore(function () {
    this.timeout(timeout);    
    driver = new webdriver.Builder()
      .forBrowser('chrome')
      .build();
  });

  test.after(function (){
    driver.get('http://www.google.com');
  });

})();
