'use strict';

var app = app || {};

app.FolioRouter = Backbone.Router.extend({
    $pages   : $('.page'),
    $navItem : $('.nav-item'),

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

    addActive: function(section){
        this.removeActive();
        $(section).addClass('active');
    },

    removeActive: function(){
        this.$navItem.removeClass('active');
    },

    showPage: function(page) {
        this.hidePages();
        $(page).show().css('opacity', 1);
    },

    hidePages: function() {
        this.$pages.hide().css('opacity', 0);
    },

    index: function(){
        this.removeActive();
        this.showPage('#home');
    },

    showAbout: function(){
        this.showPage('#about');
        this.addActive('.about-link');
    },

    showPortfolio: function(){
        this.addActive('.portfolio-link');
        this.showPage('#portfolio');
    },

    // filterPortfolio: function(id){
        // this.showPage('#portfolio');
        // this.navigate('portfolio/' + id, {trigger: true} );
    // }

});