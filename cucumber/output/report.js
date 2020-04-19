$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Towritefeatures/featurefile1.feature");
formatter.feature({
  "line": 1,
  "name": "learning",
  "description": "",
  "id": "learning",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "automating LGIM application",
  "description": "",
  "id": "learning;automating-lgim-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "open the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Give the URL in the text box and login",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "click on the logout",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.open_the_chrome_browser()"
});
formatter.result({
  "duration": 5760642913,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.give_the_URL_in_the_text_box_and_login()"
});
formatter.result({
  "duration": 6876854771,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.click_on_the_logout()"
});
formatter.result({
  "duration": 5293253728,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[contains(text(),\u0027Log off\u0027)]\"}\n  (Session info: chrome\u003d81.0.4044.113)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027HP-PC\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_172\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.113, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:49740}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: cede654fdde57a54be1e0afbf8bbe6c9\n*** Element info: {Using\u003dxpath, value\u003d//span[contains(text(),\u0027Log off\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat Useless.stepdefinition.stepDefinition.click_on_the_logout(stepDefinition.java:48)\r\n\tat ✽.Then click on the logout(src/main/java/Towritefeatures/featurefile1.feature:6)\r\n",
  "status": "failed"
});
});