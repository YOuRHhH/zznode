const {ZFile} = require("../dist/zztool.es.js");

const file = new ZFile()
console.log(file.readFileContentSync("./package.json"))

function getType(data) {
    return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}


function defaultCheckEmpty(value) {
    if (value == null)
        return true;
    if (getType(value) === "string")
        return value.trim() === "";
    if (getType(value) === "number" ||
        getType(value) === "boolean" ||
        getType(value) === "date" ||
        getType(value) === "function" ||
        getType(value) === "regexp")
        return false;
    if (Array.isArray(value))
        return value.length === 0;
    if (typeof value === "object")
        return Object.keys(value).length === 0;
    return false;
}