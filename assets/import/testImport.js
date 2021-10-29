import callDefaultExport, {
    sum,
    nameAlias as newAlias,
} from "../export/testExport.js";

console.log(sum(10));
//** Default export , import with any name
console.log(callDefaultExport());

console.log(newAlias());
