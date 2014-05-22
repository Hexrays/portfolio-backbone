'use strict';

var app = app || {};

$(function(){
    var $menu     = $('#menu'),
        $menuLink = $('.menu-link');

    $menuLink.on('click', function(){
        $menuLink.toggleClass('active');
        $menu.toggleClass('active');
        return false;
    });

    new app.PortfolioView(app.siteData);
});
