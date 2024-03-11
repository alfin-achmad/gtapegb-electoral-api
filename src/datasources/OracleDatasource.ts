import {registerProvider} from "@tsed/di";
import {DataSource} from "typeorm";
import {Logger} from "@tsed/logger";

export const OracleDatasource = Symbol.for("OracleDatasource");
export type OracleDatasource = DataSource;
export const oracleDatasource = new DataSource({
  type: "oracle",
  entities: [],
  host: "localhost",
  username: "system",
  password: "oracle",
  port: 1521,
  sid: "xe.oracle.docker"
});


registerProvider<DataSource>({
  provide: OracleDatasource,
  type: "typeorm:datasource",
  deps: [Logger],
  async useAsyncFactory(logger: Logger) {
    await oracleDatasource.initialize();

    logger.info("Connected with typeorm to database: Oracle");

    return oracleDatasource;
  },
  hooks: {
    $onDestroy(dataSource) {
      return dataSource.isInitialized && dataSource.close();
    }
  }
});
