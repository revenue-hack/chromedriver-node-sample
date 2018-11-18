'use strict';

const url = 'https://www.skincare-univ.com';

const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

const prefs = new webdriver.logging.Preferences();
prefs.setLevel(webdriver.logging.Type.PERFORMANCE, webdriver.logging.Level.ALL);
const caps = webdriver.Capabilities.chrome();
caps.set('chromeOptions', {
  args: [
    '--headless',
    '--no-sandobox',
  ]
});
caps.setLoggingPrefs(prefs)
const driver = new webdriver.Builder().withCapabilities(caps).build();

driver.get(url);
driver.manage().logs().get('performance').then(function(text) {
  console.log('テキスト', text);
});
driver.quit();

