'use strict';

// This file is for portfolio site views

var app = app || {};

app.SiteView = Backbone.View.extend({
    tagName   : 'li',
    className : 'siteContainer',
    template  : _.template( $('#siteTemplate').html() ),

    events: {
        'click .site-item' : 'onItemTap',
        'click .site-url'  : 'onLinkClick'
        // 'click .buzzword'  : 'onBuzzwordClick'
    },

    render: function(){
        this.$el.html( this.template( this.model.toJSON() ) );

        return this;
    },

    onItemTap: function(){
        if(Modernizr.touch){
            if(!this.$el.hasClass('active')){
                this.$el.addClass('active').siblings().removeClass('active');
            } else {
                this.$el.removeClass('active');
            }
        }
    },

    onLinkClick: function(e){
        var site = 'outgoing: ' + $(e.target).data('site');
        ga('send', 'event', 'click', site);
    }
});
