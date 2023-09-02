var log = function (){     
    var args = Array.prototype.slice.call(arguments); // Convert args to a normal array
    args.unshift("[legacyLook.js]: "); // Prepend log prefix log string
    console.log.apply(console, args);// Pass along arguments to console.log
}
export {log};