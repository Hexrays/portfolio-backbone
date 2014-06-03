'use strict';

var app = app || {};

app.SiteView = Backbone.View.extend({
    tagName: 'li',
    className: 'siteContainer',
    template: _.template( $('#siteTemplate').html() ),

    events: {
        'click .site-item' : 'onItemTap'
    },

    render: function(){
        this.$el.html( this.template( this.model.toJSON() ) );

        return this;
    },

    onItemTap: function(){
        if(!this.$el.hasClass('active')){
            this.$el.addClass('active').siblings().removeClass('active');
        } else {
            this.$el.removeClass('active');
        }
    }
});