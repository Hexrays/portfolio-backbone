'use strict';

var app = app || {};

app.HomeView = Backbone.View.extend({
    el: '#home',

    $header: $('.home-header'),
    $subheader: $('.subheader'),
    $spans: null,

    initialize: function() {
        this.$header.blast({
            delimiter: 'character'
        });
        this.$spans = this.$header.find('span');
    },

    getRandom: function(min, max) {
        return Math.random() * (max - min) + min;
    },

    explodeElement: function($el) {
        var offsetX = this.getRandom(-200, 200);
        var offsetY = this.getRandom(-300, 300);
        var scale = this.getRandom(1, 5);

        $el.velocity({
                translateX : offsetX,
                translateY: offsetY,
                scale: scale
            }, {
                duration: 0,
                // delay: 500,
                // easing: [50, 2]
            }).velocity({
                translateX: 0,
                translateY: 0,
                scale: 1
            }, {
                duration: 300,
                delay: 1000,
                easing: [50, 5],
                complete: this.onUnexplode
            });
    },

    onUnexplode: function() {

    },

    sayHello: function() {
        var self = this;
        console.log('Hello');
        this.$spans.each(function(){
            self.explodeElement($(this));
        });
    }
});
