'use strict';

var app = app || {};

app.SiteView = Backbone.View.extend({
    tagName: 'div',
    className: 'siteContainer',
    template: _.template( $('#siteTemplate').html() ),

    render: function(){
        this.$el.html( this.template( this.model.toJSON() ) );

        return this;
    }
});