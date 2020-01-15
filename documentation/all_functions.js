/** DECLARATION */
require('chromedriver');
var webdriver = require('selenium-webdriver');
// OR 
var {Build, By} = require('selenium-webdriver');
/********************************** */

// Navigate to
await driver.get('https://selenium.dev');
await driver.getCurrentUrl();
await driver.navigate().back();
await driver.navigate().forward();
await driver.navigate().refresh();
await driver.getTitle();


/********* Windows and tabs ********************/
//Store the ID of the original window
const originalWindow = await driver.getWindowHandle();
//Check we don't have other windows open already
assert((await driver.getAllWindowHandles()).length === 1);
//Click the link which opens in a new window
await driver.findElement(By.linkText('new window')).click();
//Wait for the new window or tab
await driver.wait(async () => (await driver.getAllWindowHandles()).length === 2, 10000 );
//Loop through until we find a new window handle
const windows = await driver.getAllWindowHandles();
windows.forEach(async handle => { if (handle !== originalWindow) { await driver.switchTo().window(handle); } });
//Wait for the new tab to finish loading content
await driver.wait(until.titleIs('Selenium documentation'), 10000);
/******************************************************** */

/******** Create new window (or) new tab and switch ********** */
// Opens a new tab and switches to new tab
await driver.switchTo().newWindow('tab');
// Opens a new window and switches to new window
await driver.switchTo().newWindow('window');
/******************************************************** */

/******** Closing a window or tab ********** */
//Close the tab or window
await driver.close();
//Switch back to the old tab or window
await driver.switchTo().window(originalWindow);
/******************************************************** */

/******** By ********** */
// Using the ID
await driver.switchTo().frame('buttonframe');
// Or using the name instead
await driver.switchTo().frame('myframe');
// Now we can click the button
await driver.findElement(By.css('button')).click();
/******************************************************** */