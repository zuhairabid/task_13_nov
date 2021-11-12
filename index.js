const CheckDataType = require("./dataTypeChecker");
const ListDivide = require("./listDivider");


var resultDataType = new CheckDataType().isInstance(null,9)


var resultChunkArray = new ListDivide().get_chunked_array([1,2,3,4], 2);


console.log(resultDataType)
console.log(resultChunkArray)



