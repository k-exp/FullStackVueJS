var fs = require("fs");
var fileName = 'warAndPeace.txt'

// Blocking call. 
var data = fs.readFileSync(fileName);

// Non-blocking callback.
fs.readFile(fileName, function (err, data) {
   if (err) return console.error(err);
   console.log("CALL BACK");
});

