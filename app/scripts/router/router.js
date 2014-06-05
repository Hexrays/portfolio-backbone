'use strict';

var app = app || {};

app.FolioRouter = Backbone.Router.extend({
    $pages: $('.page'),

    routes: {
        ''              : 'index',
        'about'         : 'showAbout',
        'portfolio'     : 'showPortfolio'
        // 'portfolio/:id' : 'filterPortfolio'
    },

    initialize: function(){
        Backbone.history.start({ pushState: false });
        // this.$pages = $('.page');
    },

    showPage: function(page) {
        this.hidePages();
        $(page).show().css('opacity', 1);
    },

    hidePages: function() {
        this.$pages.hide().css('opacity', 0);
    },

    index: function(){
        this.showPage('#home');
    },

    showAbout: function(){
        this.showPage('#about');
    },

    showPortfolio: function(){
        this.showPage('#portfolio');
    },

    // filterPortfolio: function(id){
        // this.showPage('#portfolio');
        // this.navigate('portfolio/' + id, {trigger: true} );
    // }

});