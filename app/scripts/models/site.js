'use strict';

var app = app || {};

// Site Model

app.Site = Backbone.Model.extend({

    defaults: {
        title            : 'Untitled',
        className        : 'project',
        description      : 'Unknown',
        responsibilities : 'None',
        company          : 'Hexrays',
        year             : 'unknown...',
        image            : 'images/lnksy.png',
        url              : '#',
        keywords         : 'none'
    }
});