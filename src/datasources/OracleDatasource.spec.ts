import { PlatformTest } from "@tsed/common";
import { OracleDatasource } from "./OracleDatasource";

describe("OracleDatasource", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<OracleDatasource>(OracleDatasource);
    // const instance = PlatformTest.invoke<OracleDatasource>(OracleDatasource); // get fresh instance

    expect(instance).toBeInstanceOf(OracleDatasource);
  });
});
