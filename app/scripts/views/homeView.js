'use strict';

var app = app || {};

app.HomeView = Backbone.View.extend({
    el : '#home',

    $homeContents : $('.home-content'),
    $header       : $('.home-header'),
    $subheader    : $('.subheader'),
    $headerSpans  : null,
    $homeSpans    : null,

    initialize() {
        _.bindAll(this,
            'sayHello'
        );
        this.$homeContents.blast({
            delimiter : 'character'
        });
        this.$headerSpans = this.$header.find('span');
        this.$homeSpans   = this.$homeContents.find('span');
        console.log('ready');
        window.boom = () => this.sayHello();
    },

    getRandom(min, max) {
        return Math.random() * (max - min) + min;
    },

    explodeText($el) {
        var offsetX = this.getRandom(-300, 300);
        var offsetY = this.getRandom(-300, 300);
        var scale = this.getRandom(0.5, 3);
        var delay = this.getRandom(800, 1200);
        var op = this.getRandom(0.75, 0.95);

        $el.velocity({
                translateX : offsetX,
                translateY : offsetY,
                scale      : scale,
                opacity    : op
            }, {
                duration : 300,
                delay    : 700,
                easing   : [50, 5]
            }).velocity({
                translateX : 0,
                translateY : 0,
                scale      : 1,
                opacity    : 1
            }, {
                duration : 300,
                delay    : delay,
                // easing   : [50, 5],
                complete : this.onUnexplode
            });
    },

    onUnexplode() {

    },

    explodeHeader() {
        let self = this;
        this.$headerSpans.each(function() {
            self.explodeText($(this));
        });
    },

    getAngle(x1, y1, x2, y2) {
        return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI + 180;
    },

    explodeTextFromCenter($el, center, ltr) {
        let elOffset = $el.offset();
        let posX = elOffset.left;
        let posY = elOffset.top;

        let randDistX = this.getRandom(75, 150);
        let randDistY = this.getRandom(75, 150);

        let distX = posX <= center.x ? -randDistX : randDistX;
        let distY = posY <= center.y ? -randDistY : randDistY;
        let baseAng = this.getAngle(elOffset.left, elOffset.top, center.x, center.y);
        let ang = this.getRandom(baseAng - 5, baseAng + 5);
        let offsetX = 100 * Math.cos( ang ) + distX;
        let offsetY = 100 * Math.sin( ang ) + distY;
        var scale = this.getRandom(0.5, 2);
        var delay = this.getRandom(800, 1200);
        var op = this.getRandom(0.75, 0.95);

// console.log(ltr, Math.floor(ang), Math.floor(offsetX), Math.floor(offsetY), posX, posY, center.x, center.y);
// console.log(ltr, posX, posY);

        $el.velocity({
            translateX : offsetX,
            translateY : offsetY,
            scale      : scale,
            opacity    : op
        }, {
            duration : 300,
            delay    : 700,
            easing   : [250, 15]
        }).velocity({
            translateX : 0,
            translateY : 0,
            scale      : 1,
            opacity    : 1
        }, {
            duration : 300,
            delay    : delay,
            // easing   : [50, 5]
        });
    },

    explodeFromCenter($el) {
        // console.log(this.$heroUnit);
        let self = this;
        let vertCenter = this.$el.outerHeight() / 2;
        let horizCenter = this.$el.outerWidth(true) / 2;
        let center = {x : horizCenter, y : vertCenter};
// console.log(center.x, center.y);

        $el.each(function() {
            self.explodeTextFromCenter($(this), center, $(this).text());
        });
    },

    sayHello() {
        let num = Math.floor(this.getRandom(0, 2));
        console.log(num);
        if(num) {
            console.log('just splode');
            this.explodeHeader();
        } else {
            console.log('center');
            this.explodeFromCenter(this.$homeSpans);
        }
    }
});
