# testrail-api-integration
testrail integration

## Integration of Cucumber and TestRail

Note: Don't get confused between caseid and testid

caseid is a physical id that is added in suite which starts with C
TestID is a temporary id that is dynamically generated when case was added to new test run which starts with T
Please do not use T only use case id's starts with C , any T internally it refers C
Ex: My case id is C4, assume same case added to test run then assume temp id get generated as T2341 

- Caseids can have either @c or @C Ex: @c123 or @C123
- BugIds pattern follow as Bug-JIRAID  Ex: Bug-DSS-678
```text

# Feature file

Single case tagging:-
 @C123
  Scenario Outline: 

@c123
Scenario:

Mulltiple Case taggings

 @C123 @C789 @c432
  Scenario Outline: 

- CaseID mapping with Bugs

 @C123 @Bug-DSS-678
  Scenario Outline: 
  
 - Multiple bugs mapping
  @C123 @Bug-DSS-678,DSS-987
  Scenario Outline: 
```

## Create hook file or you can try hooks of protractor,webdriverio etc
- If you are using cucumber framework, you can create separe native cucmber hooks as well  if needed

```js
//typescript
import {CucumberRailClient} from "testrail-integration";
//javascript

const {CucumberRailClient} = require ("testrail-integration");

  const runid = 1;
    const version = "Build 1.3.4"

//username, password, url, runid and version can be passed from .env or config or property file


const options = {
  username: "test@gmail.com",
  password: "pwd123,
  url: "https://in12.testrail.io"
};
const testrail = new CucumberRailClient(options);



//Below code can be used in hooks 
// you can use below code in cofnfig file of webdriverio and protractor with cucumber framework
After({timeout: 100 * 3000}, async (scenario) => {
  
    try {
      await testrail.updateTestRailResults(scenario, runid, version);
    } catch (err) {
      console.log("Error " + err);
    }

});

```

## WebdriverIO. Cucumber
config.ts or config.js

```js

  afterScenario: async(scenario: any) => {
   
     try {
      await testrail.updateTestRailResults(scenario, runid, version);
    } catch (err) {
      console.log("Error " + err);
    }
  }
  
```
