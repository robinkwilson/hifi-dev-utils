//
// Use as a template for an entity with a client and server script
// Avatar action on entity -> Client method -> Server method -> Client method
//
// Each client script runs for each user for the entity. 
// One server script per entity.
// 
// To view Entity Script print() statements:
//    Turn on Developer Menu: Settings > Developer Menu
//    Turn on Verbose Logging: Developer > Scripting > "Verbose Logging"
//    One option: Developer > "Log"
//        Filter: "hifi.scriptengine.script"
//    Second option: Developer > Scripting > "Script Log (HMD Friendly)..."
//

(function() {
    var _entityID;
    var _this;
    var displayName;

    var DEBUG = true;

    function ClientScriptForEntity() {

    }

    ClientScriptForEntity.prototype = {
        remotelyCallable: [
            "calledFromServer"
        ],

        preload: function(entityID) {
            _entityID = entityID;
            _this = this;

            if (DEBUG) {
                print("Example: preload!");
            }
        },

        unload: function () {

        },

        // Only client scripts on entities have access to client events 
        // such as mouse/controller key presses or MyAvatar information.

        // To communicate with the server scripts use callEntityServerMethod() (https://docs.highfidelity.com/api-reference/namespaces/entities#.callEntityServerMethod)
        clickReleaseOnEntity: function (entityID, pointerEvent) {
            if (pointerEvent.isPrimaryButton) {
                this.sendInfoToServer();
            }
        },
        startNearTrigger: function (entityID, handUserID) {
            this.sendInfoToServer();
        },
        startFarTrigger: function (entityID, handUserID) {
            this.sendInfoToServer();
        },

        sendInfoToServer: function () {
            if (DEBUG) {
                print("Example: sending Info to Server! ", _entityID);
            }

            displayName = MyAvatar.displayName;

            var clientSessionUUID = MyAvatar.sessionUUID; // used by server script to callback this client
            var username = AccountServices.username;
            var date = new Date(); // local time

            var parameters = [clientSessionUUID, username, date];
         
            // https://docs.highfidelity.com/api-reference/namespaces/entities#.callEntityServerMethod
            // params are:  entityID, string method name, parameters as an array of strings
            Entities.callEntityServerMethod(_entityID, "calledFromClient", parameters);
        },

        calledFromServer: function (entityID, params) {
            if (DEBUG) {
                print("Example: calledFromServer!", entityID, JSON.stringify(params));
            }

            var accessedCount = params[1];
            var uniqueVisitorCount = params[0];
            print("I've been called from the server entity script!");
            print("Thank you! ", displayName, "! You've accessed me ", accessedCount, "times.");
            print("Unique visitors count is ", uniqueVisitorCount, ".");
        }
    }

    return new ClientScriptForEntity();

});