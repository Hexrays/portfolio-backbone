'use strict';

var app = app || {};

app.Portfolio = Backbone.Collection.extend({
    model: app.Site,

    // filterByKeyword: function(keyword){
        // return this.models.filter(
        //     function(c) {
        //         console.log(c.attributes.keywords);
        //         return _.contains(keyword, c.attributes.keywords);
        //     }
        // );
        // var filtered = this.filter(function(site){
        //     var keywords = site.get('keywords');
        //     console.log(keywords);
        //     return keywords.any(keyword);
        // });
    // }
});