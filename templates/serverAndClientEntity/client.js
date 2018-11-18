//
// Use as a template for an entity with a client and server script
//
// Each client script runs for each user for the entity. 
// One server script per entity.
// 

(function() {
    var _entityID;
    var _this;

    var I_AM_STATIC_VARIABLE = 200;
    // variables

    function ClientScriptForEntity() {

    }

    ClientScriptForEntity.prototype = {

        preload: function(entityID) {
            _entityID = entityID;
            _this = this;
        },

        unload: function () {

        },

        // Only client scripts on entities have access to client events 
        // such as mouse/controller key presses or MyAvatar information.

        // To communicate with the server scripts use callEntityServerMethod() (https://docs.highfidelity.com/api-reference/namespaces/entities#.callEntityServerMethod)
        startNearTrigger: function (entityID, handUserID) {},
        startFarTrigger: function (entityID, handUserID) {},


        // EVENT LISTENERS FOR THE ENTITY

        // MOUSECLICK METHODS - not triggered by controller
        // params are: entityID, event PointerEvent (https://docs.highfidelity.com/api-reference/globals#PointerEvent)
        // https://docs.highfidelity.com/api-reference/namespaces/entities#.clickDownOnEntity
        clickDownOnEntity: function (entityID, pointerEvent) {},
        clickReleaseOnEntity: function (entityID, pointerEvent) {},
        holdingClickOnEntity: function (entityID, pointerEvent) {},

        mouseMoveOnEntity: function (entityID, pointerEvent) {},
        mousePressOnEntity: function (entityID, event) {},
        mouseReleaseOnEntity: function (entityID, event) {},
        mouseDoublePressOffEntity: function (pointerEvent) {},

        hoverEnterEntity: function (entityID, pointerEvent) {},
        hoverLeaveEntity: function (entityID, pointerEvent) {},
        hoverOverEntity: function (entityID, pointerEvent) {},

        // triggered when a script in a Web entity's web page script sends and event over hte script's eventbridge
        webEventReceived: function (entityID, message) {}, // https://docs.highfidelity.com/api-reference/namespaces/entities#.webEventReceived

        // COLLISION METHODS
        // Avatar collision with this entity
        leaveEntity: function (userID) {},
        enterEntity: function (userID) {}, // https://docs.highfidelity.com/api-reference/namespaces/entities#.enterEntity

        // Entity (idB) collision with this entity (idA)
        // Collision properties https://docs.highfidelity.com/api-reference/globals#Collision
        collisionWithEntity: function (idA, idB, collision) {}, // https://docs.highfidelity.com/api-reference/namespaces/entities#.collisionWithEntity

        // DELETE
        // triggered when entity is deleted
        deletingEntity: function (entityID) {},

        // CONTROLLER METHODS
        // params are: entityID, string "<"left" || "right">,<MyAvatar.UUID>" ex "left,userID"
        // https://docs.highfidelity.com/api-reference/namespaces/controller

        // Far Trigger Entity methods
        startFarTrigger: function (entityID, handUserID) {},
        continueFarTrigger: function (entityID, handUserID) {},
        stopFarTrigger: function (entityID, handUserID) {},

        // Near trigger Entity methods
        startNearTrigger: function (entityID, handUserID) {},
        continueNearTrigger: function (entityID, handUserID) {},
        stopNearTrigger: function (entityID, handUserID) {},

        // distanceGrab
        startDistanceGrab: function (entityID, handUserID) {},
        continueDistanceGrab: function (entityID, handUserID) {},

        // distanceGrab
        startNearGrab: function (entityID, handUserID) {},
        continueNearGrab: function (entityID, handUserID) {},

        // releases the trigger
        releaseGrab: function (entityID, handUserID) {},

        // Equip
        startEquip: function (entityID, handUserID) {},
        continueEquip: function (entityID, handUserID) {},
        releaseEquip: function (entityID, handUserID) {},
    }

    return new ClientScriptForEntity();

});