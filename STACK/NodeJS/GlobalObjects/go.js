// Path to this file. 
console.log("Path to this file: "+__filename)

console.log(__dirname.split("\\"))

// We can clear the timeout with clearTimeout(timeOutRef)
var timeOutRef = setTimeout(()=>{console.log("10 Seconds has passed since execution.")}, 10000)

console.log("Statement after set setTimeout")

var i = setInterval(()=>{console.log("Two seconds has passed.")},2000)

var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that  
    // with toString() and then trim() 
    console.log("you entered: [" + 
        d.toString().trim() + "]");
        console.log("Stoping the annoying two second message.")
        clearInterval(i)
  });