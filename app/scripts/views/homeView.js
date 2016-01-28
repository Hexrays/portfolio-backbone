'use strict';

var app = app || {};

app.HomeView = Backbone.View.extend({
    el : '#home',

    $homeContents   : $('.home-content'),
    $header         : $('.home-header'),
    $subheader      : $('.home-subheader'),
    $headerSpans    : null,
    $subheaderSpans : null,
    $homeSpans      : null,

    events    : {
        'click .home-link'  : 'onHomeLinkClick'
    },

    initialize() {
        _.bindAll(this,
            'sayHello',
            'explodeSubheader'
        );
        this.$homeContents.blast({
            delimiter : 'character'
        });
        this.$headerSpans    = this.$header.find('span');
        this.$subheaderSpans = this.$subheader.find('span');
        this.$homeSpans      = this.$homeContents.find('span');
        
        window.boom = () => this.sayHello();
    },

    onHomeLinkClick(e) {
        e.preventDefault();
        let targetPage = e.currentTarget.getAttribute('href').split('#')[1];
        let track = 'Explode Link: ' + targetPage;
        let center = {
            x : e.clientX,
            y : e.clientY
        };
        console.log(track);
        ga('send', 'event', 'click', track);
        this.explode(this.$homeSpans, center);
        _.delay(this.navigateToPage, 400, targetPage);
    },

    navigateToPage(page) {
        app.router.navigate(page, true);

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
                delay    : delay
                // easing   : [50, 5],
                // complete : this.onUnexplode
            });
    },

    onUnexplode() {

    },

    explodeHeader() {
        let self = this;
        this.$headerSpans.each(function() {
            self.explodeText($(this));
        });
        _.delay(this.explodeSubheader, 2000);
    },

    explodeSubheader() {
        let self = this;
        this.$subheaderSpans.each(function() {
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
        let scale = this.getRandom(0.5, 2);
        let delay = this.getRandom(1100, 1200);
        let op = this.getRandom(0.75, 0.95);

        $el.velocity({
            translateX : offsetX,
            translateY : offsetY,
            scale      : scale,
            opacity    : op
        }, {
            duration : 400,
            // delay    : 700,
            easing   : [0.07, .67, 0, 1]
            // easing   : 'easeOutQuart'
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

    explodeFromCenter($els) {
        let vertCenter = this.$el.outerHeight() / 2;
        let horizCenter = this.$el.outerWidth(true) / 2;
        let center = {x : horizCenter, y : vertCenter};

        this.expode($els, center);
    },

    explode($els, center) {
        let self = this;
        $els.each(function() {
            self.explodeTextFromCenter($(this), center, $(this).text());
        });
    },

    sayHello() {
        let num = Math.floor(this.getRandom(0, 2));
        if(num) {
            this.explodeHeader();
        } else {
        this.explodeFromCenter(this.$homeSpans);
        }
    }
});
