'use strict';

var app = app || {};

app.PortfolioView = Backbone.View.extend({
    el: '#portfolio-items',

    initialize: function(portfolioSites) {
        this.collection = new app.Portfolio(portfolioSites);
        this.render();
    },

    // render the portfolio by rendering each book in its collection
    render: function(){
        this.collection.each(function(item){
            this.renderSite(item);
        }, this);
    },

    renderSite: function(item) {
        var siteView = new app.SiteView({
            model: item
        });
        this.$el.append( siteView.render().el );
    }
});
