(function (){

    // "?v" + random number is to ensure if any changes in the prototype occur, a script reload
    // will update the instance entity functionality
    var Constructor = Script.require(Script.resolvePath("./constructor.js?v" + Math.random()));
    
    var blueColorArray = [
        { blue: 255, green: 0, red: 0 },
        { blue: 255, green: 50, red: 0 },
        { blue: 255, green: 0, red: 50 },
        { blue: 255, green: 50, red: 50 },
        { blue: 255, green: 100, red: 0 },
        { blue: 255, green: 0, red: 100 },
        { blue: 255, green: 100, red: 100 }
    ];

    return new Constructor(blueColorArray);

})();