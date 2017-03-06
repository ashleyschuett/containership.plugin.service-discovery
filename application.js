'use strict';

const follower = require('./lib/follower');
const leader = require('./lib/leader');

const ContainershipPlugin = require('containership.plugin');

module.exports = new ContainershipPlugin({
    type: 'core',

    runLeader: function(core) {
        leader.initialize(core);
    },

    runFollower: function(core) {
        follower.initialize(core);
    }

    initialize: function(core){
        if(core.options.mode === 'leader') {
            return module.exports.runLeader(core);
        }

        return module.exports.runFollower(core);
    },

    reload: function(){}
});
