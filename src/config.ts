import jsonfile = require("jsonfile");
import {Category, CategoryConfiguration, CategoryLogger, CategoryServiceFactory, LogLevel} from "typescript-logging";

// Optionally change default settings, in this example set default logging to Info.
// Without changing configuration, categories will log to Error.
CategoryServiceFactory.setDefaultConfiguration(new CategoryConfiguration(LogLevel.Info));

// Create categories, they will autoregister themselves, one category without parent (root) and a child category.
export const catService = new Category("service");
export const catProd = new Category("product", catService);

// Optionally get a logger for a category, since 0.5.0 this is not necessary anymore, can use category itself to log.
// export const log: CategoryLogger = CategoryServiceFactory.getLogger(cat);

export let config = {};

export const loadConfig = async (path: string) => {
  console.log(path)
  return jsonfile.readFile(path)
  .then((res) => {
    config = res;
  })
  .catch((error) => catProd.error("Error reading JSON", error));
};
