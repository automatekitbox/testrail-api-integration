# testrail-api-integration
testrail integration

## Integration of Cucumber and TestRail


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

//Below code you can keep it in Before All hook
const options = {
  username: "test@gmail.com",
  password: "pwd123,
  url: "https://in12.testrail.io"
};
const testrail = new CucumberRailClient(options);

//Below code , just added flag with or without testrail
After({timeout: 100 * 3000}, async (scenario) => {
  
    try {
      await testrail.updateTestRailResults(scenario, runid, version);
    } catch (err) {
      console.log("Error " + err);
    }

});

```
