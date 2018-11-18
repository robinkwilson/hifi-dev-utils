//
// Imports Constructor with unique color array to this instance.
//

/* global Script */

(function () {

    // "?v" + random number is to ensure if any changes in the prototype occur, a script reload
    // will update the instance entity functionality
    var Constructor = Script.require(Script.resolvePath("./constructor.js?" + Math.random()));

    var greenColorArray = [
        { green: 255, blue: 0, red: 0 },
        { green: 255, blue: 50, red: 0 },
        { green: 255, blue: 0, red: 50 },
        { green: 255, blue: 50, red: 50 },
        { green: 255, blue: 100, red: 0 },
        { green: 255, blue: 0, red: 100 },
        { green: 255, blue: 100, red: 100 }
    ];

    return new Constructor(greenColorArray);

})();
