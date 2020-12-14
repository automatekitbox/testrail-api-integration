// const {
//   prettyPrintJSON,
//   makeHttpRequest,
// } = require("@krisinc/node-rest-assured");
//
// const { expect } = require("chai");
// eslint-disable-next-line import/no-unresolved

// const { TestRailClient, INewTestResultsImpl } = require("testrail-integration");

const { INewTestResultsImpl, TestRailClient } = require("testrail-integration");

describe("jsonValidationUtils", () => {
  describe("prettyPrintJSON", () => {
    it("should return formatted JSON", async () => {
      const options = {
        username: "krishna01012002@gmail.com",
        password: "Venkat@1234",
        url: "https://inc2.testrail.io",
      };
      const client = new TestRailClient(options);
      const fil = {};
      const val = Object.entries(fil).map((key) => {
        let st = "";
        if (key[1] !== "" && !(key[1] instanceof Array)) {
          st = `&${key[0]}=${key[1]}`;
          console.log(`ARRAYT${st}`);
        } else if (key[1] instanceof Array) {
          console.log(`ARRAYS${key[1]}`);
          st = `&${key[0]}=${key[1]}`;
          console.log(`ARRAYS${st}`);
        } else {
          st = `&${key[0]}`;
        }
        return st;
      });

      console.log(`filterd ${val.toString().replace(/,&/g, "&")}`);
      const res = await client.getTests(1, { status_id: [1, 3] });
      console.log(`TESTS${JSON.stringify(res)}`);
      const myrun = { name: "My TESTRUN!", description: "MY NEW RUN ONE" };
      const addRun = await client.addRun(1, myrun);
      console.log(`MY NEEEE${addRun.untested_count}`);
      const myrest = [];
      const mys = new INewTestResultsImpl();
      mys.case_id = 1;
      mys.comment = "ARRAY!";
      mys.status_id = 5;
      myrest.push(mys);
      const mysx = new INewTestResultsImpl();
      mysx.case_id = 19;
      mysx.comment = "ARRAY!";
      mysx.status_id = 5;
      myrest.push(mysx);
      const resh = await client.addResultsForCases(1, myrest);
      console.log(`MY cases  ${JSON.stringify(resh)}`);
      // const data = {
      //   testProp: "testValue",
      // };
      // const json = JSON.stringify(data);
      // expect(json.indexOf("\n")).to.be.lessThan(0);
      // const response = await makeHttpRequest(
      //   "https://gorest.co.in/public-api/users"
      // );
      // logger.info(prettyPrintJSON(JSON.parse(response.body)));
      // expect("My").to.be.eqls(prettyPrintJSON(JSON.parse(ob.body)));
      // const formattedJson = prettyPrintJSON(data);
      // expect(formattedJson.indexOf("\n")).to.be.greaterThan(0);
      // expect(formattedJson).to.equal('{\n "testProp": "testValue"\n}');
    }).timeout(15000);
  });
});
