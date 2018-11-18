//
// Use as a template for an entity with a client and server script
//
// Each client script runs for each user for the entity. 
// One server script per entity.
// 
// To view Entity Server Script print() statements:
//    Turn on Developer Menu: Settings > Developer Menu
//    In Developer Menu: Developer > Scripting > "Entity Script Server Log"
//

(function() {
    var _entityID;
    var _this;

    var accessed = {};

    var DEBUG = true;

    function addVisitor(username, displayName, date) {
        if (accessed[username]) {
            // already accessed this entity
            // increment click count
            accessed[username].count += 1;
            accessed[username].lastDate = date;

        } else {
            // new user accessed this entity
            accessed[username] = {
                count: 1,
                lastDate: date
            }
        }
    }

    function getCount(username) {
        if (!accessed[username]) {
            // should never be returned 
            // because the script adds the user to the list before this is called
            return 0;
        }

        return accessed[username].count;
    }

    function ServerScriptForEntity() {

    }

    ServerScriptForEntity.prototype = {
        remotelyCallable: [
            "calledFromClient"
        ], // list of function names that are accessible from other scripts

        preload: function(entityID) {
            _entityID = entityID;
            _this = this;

            if (DEBUG) {
                // See "To view Entity Server Script print statements" in this script header for instructions
                print("Example: Entity server script preload");
            }
        },

        unload: function () {
            if (DEBUG) {
                print("Example: Entity server script unload");
            }
        },

        // To communicate with the client script use callEntityClientMethod() (https://docs.highfidelity.com/api-reference/namespaces/entities#.callEntityClientMethod)
        // params is always an array of strings
        calledFromClient: function (entityID, params) {

            if (DEBUG) {
                print("Called from the client entity script!", entityID, JSON.stringify(params));
            }

            // Advanced option
            // Use JSON.parse(params[0]) if you wanted to pass in an object from the client
            // try {
            //     var objectParams = JSON.parse(params[0]);
            // } catch (error) {
            //     console.error("Issue parsing object in 'calledFromClient'", error);
            // }

            var clientSessionUUID = params[0]; // call the client script metion on correct machine
            var username = params[1];
            var date = params[2];

            addVisitor(username, date);
            var countAccessed = getCount(username);

            var visitorUsernameList = Object.keys(accessed);
            var uniqueVisitorCount = visitorUsernameList.length;

            var parameters = [uniqueVisitorCount, countAccessed];

            Entities.callEntityClientMethod(clientSessionUUID, entityID, "calledFromServer", parameters);
        }
    }

    return new ServerScriptForEntity();

});