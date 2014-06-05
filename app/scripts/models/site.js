'use strict';

var app = app || {};

// Site Model

app.Site = Backbone.Model.extend({

    defaults: {
        title            : 'Untitled',
        description      : 'Unknown',
        responsibilities : 'None',
        image            : 'images/lnksy.png',
        url              : '#',
        keywords         : 'none'
    }
});