$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/TestLogin.feature");
formatter.feature({
  "name": "Connexion",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@TAL-2"
    }
  ]
});
formatter.scenario({
  "name": "Connexion Talan Academy",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TAL-2"
    },
    {
      "name": "@TEST_TAL-1"
    }
  ]
});
formatter.step({
  "name": "i am on TA login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "TestLogin.TestLogin.i_am_on_TA_login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add my mail and password",
  "keyword": "When "
});
formatter.match({
  "location": "TestLogin.TestLogin.i_add_my_mail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on OK",
  "keyword": "And "
});
formatter.match({
  "location": "TestLogin.TestLogin.click_on_OK()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The dashboard will be opened",
  "keyword": "Then "
});
formatter.match({
  "location": "TestLogin.TestLogin.the_dashboard_will_be_opened()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the browser must be closed",
  "keyword": "And "
});
formatter.match({
  "location": "TestLogin.TestLogin.the_browser_must_be_closed()"
});
formatter.result({
  "status": "passed"
});
});