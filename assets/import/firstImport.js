import defaultExport from "module-name";
import * as name from "module-name";
import { export1 } from "module-name";
import { export1 as alias1 } from "module-name";
import { export1, export2 } from "module-name";
import { export1, export2 as alias2 } from "module-name";
// import defaultExport, { export1 [ , ['...'] ] } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
var promise = import("module-name");

//* Import an entire module's contents
import * as myModule from "../import/";
//you would call like
myModule.alias1();
//* Import a single export from a module

import { first } from "../import";

//* Import multiple exports from module
import { foo, bar } from "/modules/my-module.js";

//* Import an export with a more convenient alias
import { reallyReallyLongModuleExportName as shortName } from "/modules/my-module.js";

//* Rename multiple exports during import
import {
    reallyReallyLongModuleExportName as shortName,
    anotherLongModuleName as short,
} from "/modules/my-module.js";

//* Importing defaults
/**
 * @desc It is possible to have a default export (whether it is an object, a function, a class, etc.). The import statement may then be used to import such defaults.
 */
import myDefault from "/modules/my-module.js";
