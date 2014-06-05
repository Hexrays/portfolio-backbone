'use strict';

var app = app || {};

app.AppView = Backbone.View.extend({
    el        : '#site-header',
    $menu     : $('#menu'),
    $menuLink : $('.menu-link'),

    events    : {
        'click .home-link'      : 'displayHome',
        'click .portfolio-link' : 'displayPortfolio',
        'click .about-link'     : 'displayAbout',
        'click .menu-link'      : 'activateMenu',
        'click .nav-item'       : 'activateMenu'
    },

    initialize: function(){
        this.router = new app.FolioRouter();
    },

    displayHome: function(){
        this.router.navigate('', true);
        return false;
    },

    displayPortfolio: function(){
        this.router.navigate('portfolio', true);
        return false;
    },

    displayAbout: function(){
        this.router.navigate('about', true);
        return false;
    },

    activateMenu: function() {
        this.$menuLink.toggleClass('active');
        this.$menu.toggleClass('active');
        return false;
    }
});