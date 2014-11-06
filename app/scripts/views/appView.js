'use strict';

var app = app || {};

app.AppView = Backbone.View.extend({
    el        : '#site-header',
    $menu     : $('#menu'),
    $menuLink : $('.menu-link'),

    views     : {
        folio: null
    },

    events    : {
        'click .nav-link-home'  : 'displayHome',
        'click .portfolio-link' : 'displayPortfolio',
        'click .about-link'     : 'displayAbout',
        'click .menu-link'      : 'activateMenu',
        'click .nav-item'       : 'hideMenu'
    },

    initialize: function(){
        this.router = new app.FolioRouter();
        this.views = {
            folio: new app.PortfolioView(app.siteData)
        };
    },

    displayHome: function(){
        this.router.navigate('', true);
        ga('send', 'event', 'click', 'Home');
        return false;
    },

    displayPortfolio: function(){
        this.router.navigate('portfolio', true);
        ga('send', 'event', 'click', 'Portfolio');
        return false;
    },

    displayAbout: function(){
        this.router.navigate('about', true);
        ga('send', 'event', 'click', 'About');
        return false;
    },

    activateMenu: function() {
        this.$menuLink.toggleClass('open');
        this.$menu.toggleClass('open');
        return false;
    },

    hideMenu: function(){
        if(this.$menu.hasClass('open')){
            this.activateMenu();
        }
    }
});