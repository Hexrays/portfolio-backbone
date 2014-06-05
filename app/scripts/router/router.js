'use strict';

var app = app || {};

app.FolioRouter = Backbone.Router.extend({

    routes: {
        ''              : 'index',
        'about'         : 'showAbout',
        'portfolio'     : 'showPortfolio',
        'portfolio/:id' : 'filterPortfolio'
    },

    initialize: function(){
        Backbone.history.start({ pushState: false });
    },

    showPage: function(page) {
        this.hidePages();
        $(page).show();
    },

    hidePages: function() {
        $('.page').hide();
    },

    index: function(){
        this.showPage('#home');
        console.log('index');
    },

    showAbout: function(){
        this.showPage('#about');
    },

    showPortfolio: function(){
        this.showPage('#portfolio');
        new app.PortfolioView(app.siteData);
        console.log('farts');
    },

    filterPortfolio: function(id){
        // this.navigate('portfolio/' + id, {trigger: true} );
    }

});