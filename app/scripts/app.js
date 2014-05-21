'use strict';

var app = app || {};

$(function(){
    console.log(app.siteData);
    new app.PortfolioView(app.siteData);
});
