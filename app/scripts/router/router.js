'use strict';

var app = app || {};

app.FolioRouter = Backbone.Router.extend({
    $pages   : $('.page'),
    $navItem : $('.nav-item'),

    activePage: null,

    views     : {
        folio: null,
        home: null
    },

    routes: {
        ''              : 'index',
        'about'         : 'showAbout',
        'portfolio'     : 'showPortfolio'
        // 'portfolio/:id' : 'filterPortfolio'
    },

    initialize: function(){
        this.views = {
            folio: new app.PortfolioView(app.siteData),
            home: new app.HomeView()
        };
        Backbone.history.start({ pushState: false });
    },

    addActive: function(section){
        this.removeActive();
        $(section).addClass('active');
    },

    removeActive: function(){
        this.$navItem.removeClass('active');
    },

    showPage: function(page) {
      var self = this;

        if(this.activePage) this.hidePage(this.activePage);
        $(page).velocity('fadeIn', {
          duration: 200,
          easing: 'swing',
          display: page === '#portfolio' ? 'block' : 'flex',
          complete: function() {
            self.activePage = page;
          }
        });
    },

    hidePage: function(page) {
      $(page).velocity('fadeOut', {
        duration: 200,
        easing: 'swing',
        display: 'none'
      });
    },

    hidePages: function() {
        this.$pages.hide().css('opacity', 0);
    },

    index: function(){
        this.views.home.sayHello();
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
    }

});
