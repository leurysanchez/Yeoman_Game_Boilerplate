define(
    function(require){
        'use strict';

        var a = require('Stats/Preload');
        var b = require('Stats/Create');
        var c = require('Stats/Update');

        return {
            Preload:   a,
            Create:    b,
            Update:    c
        };
    }
);