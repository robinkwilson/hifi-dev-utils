//
// Constructor for simple color changing cube every 1 second using an interval.
// This constructor is imported to instance1.js and instance2.js and instance3.js.
// 
// Intends to show a common constructor for client entity scripts with unique variables
// For client entity scripts that require the same functionality across different entities
// with minimal code duplication.
//

/* global module */

// static variables shared across all instances
var INTERVAL_TIME = 1000; // ms change color interval
var DEBUG = false;

var Constructor = function (colorArray) {
    // unique instance variables
    this.entityID;
    this.colors = colorArray;

    this.colorChangeInterval;
    this.index = 0;
};

Constructor.prototype = {

    // ENTITY METHODS
    preload: function (entityID) {

        if (DEBUG) {
            print("preload()");
        }

        this.entityID = entityID;
        var _this = this;

        this.colorChangeInterval = Script.setInterval(function () {

            var color = _this.getNextColor();
            Entities.editEntity(_this.entityID, { color: color });

        }, INTERVAL_TIME);

    },

    unload: function () {

        if (DEBUG) {
            print("unload()");
        }

        if (this.colorChangeInterval) {
            Script.clearInterval(this.colorChangeInterval);
            this.colorChangeInterval = null;
        }
    },
    // END ENTITY METHODS

    // COLOR UTILITIES
    getNextColor: function () {

        if (DEBUG) {
            print("getNextColor() index is: ", this.index);
        }

        this.index += 1;
        if (this.index === this.colorArray.length) {
            this.index = 0;
        }
        
        return this.colorArray[this.index];
    }
    // END COLOR UTILITIES
};

module.exports = Constructor;
