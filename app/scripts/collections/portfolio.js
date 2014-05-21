'use strict';

var app = app || {};

app.Portfolio = Backbone.Collection.extend({
    model: app.Site
});