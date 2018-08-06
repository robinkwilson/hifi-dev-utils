// 
// 
// 
// 

(function (){

    // "?v" + random number is to ensure if any changes in the prototype occur, a script reload
    // will update the instance entity functionality
    var Constructor = Script.require(Script.resolvePath("./constructor.js?v" + Math.random()));
    
    var redColorArray = [
        { red: 255, green: 0, blue: 0 },
        { red: 255, green: 50, blue: 0 },
        { red: 255, green: 0, blue: 50 },
        { red: 255, green: 50, blue: 50 },
        { red: 255, green: 100, blue: 0 },
        { red: 255, green: 0, blue: 100 },
        { red: 255, green: 100, blue: 100 }
    ];

    return new Constructor(colorArray);

})();