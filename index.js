'use strict';

const url = 'https://news.yahoo.co.jp/';
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');

var options = new chrome.Options();
var logging_prefs = new webdriver.logging.Preferences();
logging_prefs.setLevel(webdriver.logging.Type.PERFORMANCE, webdriver.logging.Level.ALL);
options.setLoggingPrefs(logging_prefs);
options.addArguments('headless');

var driver = new webdriver.Builder().withCapabilities(options.toCapabilities()).build();

driver.get(url);
driver.manage().logs().get('performance').then(function(text) {
    console.log(text);
});
driver.quit();
