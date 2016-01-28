var app = app || {};

app.siteData = [
    {
        id               : 1,
        title            : 'DeutschWTF',
        className        : 'dwtf',
        description      : 'I was the sole developer on a site built to, umm, not quite celebrate the moving of Deutsch’s New York office. The web app was build so that once we arrived to the new neighborhood we would know “Where To Find” (WTF) things like “a quick lunch,” “caffeine,” or even “inspiration.”',
        responsibilities : 'It was built with React and Flux on the frontend and Express and MongoDB on the back.',
        company          : 'Deutsch',
        year             : '2015',
        image            : 'images/dwtf.jpg',
        url              : 'http://www.deutschwtf.com/',
        client           : 'Deutsch'
    },{
        id               : 2,
        title            : 'Time To Up&nbspIt',
        className        : 'ttui',
        description      : 'This site is a part of Prudential\'s Bring Your Challenges suite of online tools. At Luxurious Animals we build an interactive tool that calculates how much more money you would have in retirement by increasing your contribution now.',
        responsibilities : 'My primary responsibility was to focus on styling and making the site responsive while ensuring the site worked across all browsers, phones, tablets, and even IE7.',
        company          : 'Luxurious Animals',
        year             : '2014',
        url              : 'http://www.bringyourchallenges.com/time-to-up-it',
        image            : 'images/ttui.jpg',
        client           : 'Prudential'
    },{
        id               : 3,
        title            : 'Christmas Price Index 2015',
        className        : 'cpi',
        description      : 'PNC Bank built the world\'s first working bank made of gingerbread. The site employs an augmented reality virtual tour of the branch to explore the prices of each gift in the 12 days of Christmas.',
        responsibilities : 'I lead the development on the site using ES6 and Babel to transpile. I used ThreeJS and Backbone for the AR tour. It was awarded FWA’s Mobile Site of the Day on Christmas Eve.',
        company          : 'Deutsch',
        year             : '2015',
        image            : 'images/cpi.jpg',
        url              : 'https://www.pncchristmaspriceindex.com',
        client           : 'PNC Bank'
    },{
        id               : 4,
        title            : 'Ultra-Hd Article',
        className        : 'uhd',
        description      : 'I joined Access Intelligence to work with a small team on a series of parallax scrolling articles.',
        responsibilities : 'Ultra-Hd uses a framework Access Intelligence created in-house to build projects using Skrollr and Bootstrap.',
        company          : 'Access Intelligence',
        year             : '2014',
        image            : 'images/ultrahd.png',
        url              : 'http://www.satellitetoday.com/long-form-stories/ultra-hd-coming-to-a-screen-near-you/',
        client           : 'Via Satellite'
    },{
        id               : 5,
        title            : 'PaintOn',
        className        : 'painton',
        description      : 'PaintOn.com lets you fuel your creative flame with HGTV HOME by Sherwin-Williams. Browse Color Collections, paint products, and inspiration and get inspired to Paint On.',
        responsibilities : 'With a team of developers and designers worked throughout the site to generate front-end code and integrate it with a Java back-end.',
        company          : 'Deutsch',
        year             : '2015',
        image            : 'images/painton.jpg',
        url              : 'http://www.painton.com/',
        client           : 'Sherwin-Williams'
    },{
        id               : 6,
        title            : 'Aarting',
        className        : 'aart',
        description      : 'Aarting is a site for artists to create and sell their own limited-edition products.',
        responsibilities : 'I was tasked with adding JavaScript feature enhancements to the front-end of the site which was built with Ruby on Rails. My main focus was building the view to scale feature for prints and the t-shirt creator using canvas and FabricJs.',
        company          : 'Hexrays',
        year             : '2014',
        image            : 'images/aarting.jpg',
        url              : 'http://aarting.com/',
        client           : 'aarting'
    },{
        id               : 7,
        title            : 'Halloween Party',
        className        : 'halloween',
        description      : 'A Micro site created to promote a Halloween bash.',
        responsibilities : 'Built using Yeoman and Skrollr for the parallax effect. I dressed like a whoopie cushion.',
        company          : 'Hexrays',
        year             : '2013',
        image            : 'images/halloween.png',
        url              : 'http://hexrays.at/parties/halloween2013/',
        client           : 'Personal project'
    },{
        id               : 8,
        title            : 'How Much Is&nbspEnough?',
        className        : 'hmie',
        description      : 'Part of Prudential\'s Bring Your Challenges suite of online tools, the team at Luxurious Animals built this calculator shows how long your money will last in&nbspretirement.',
        responsibilities : 'My primary responsibility was to focus on styling and making the site responsive while ensuring the site worked across all browsers, phones, tablets, and even IE7.',
        company          : 'Luxurious Animals',
        year             : '2014',
        url              : 'http://www.bringyourchallenges.com/how-much-is-enough',
        image            : 'images/ribbon.jpg',
        client           : 'Prudential'
    },{
        id               : 9,
        title            : 'Boat Party',
        className        : 'boat',
        description      : 'A Micro site created in lieu of a traditional invitation to an epic New Years Eve Birthday Celebration.',
        responsibilities : 'Built using Yeoman, Skrollr was used for the parallax effect, and SVGs for the images.',
        company          : 'Hexrays',
        year             : '2013',
        image            : 'images/boat.jpg',
        url              : 'http://nyeboatparty2014.com/',
        client           : 'Personal project'
    },{
        id               : 10,
        title            : 'Pinkie Pie\'s Party',
        className        : 'ppp',
        description      : 'One in a series of games developed by the Luxurious Animals team for Hasbro\'s My Little Pony.' ,
        responsibilities : 'Pinkie Pie\'s Party was built using Yeoman, Greensock, Createjs, jQuery, and additional propriety tools created by Lux to ensure consistency accross the games.',
        company          : 'Luxurious Animals',
        year             : '2014',
        image            : 'images/mlp-ppp.jpg',
        url              : 'http://www.hasbro.com/mylittlepony/en_US/play/details.cfm?R=A7A8E37F-5056-9047-F5B3-857B4C5D26B4:en_US',
        client           : 'Hasbro'
    },{
        id               : 11,
        title            : 'Folio 100',
        className        : 'folio',
        description      : 'The Folio 100 is an awards program celebrating members of the magazine and media industry.' ,
        responsibilities : 'It was designed by Access Intelligence and I was chosen to lead the development on the project. I prototyped and built it using Yeoman and AngularJs.',
        company          : 'Access Intelligence',
        year             : '2014',
        image            : 'images/folio100.jpg',
        url              : 'http://www.medianextshow.com/folio100/#/',
        client           : 'The Folio: Show'
    },{
        id               : 12,
        title            : 'Stripe Yourself',
        className        : 'stripe',
        description      : 'Stripe Yourself is an app for the San Diego Zoo that allows users to upload photos and decorate their face with tiger stripes, fur, eyes, ears and whiskers. It works across browsers and on mobile devices.',
        responsibilities : 'I worked with the design team to style the site based on their vision. I was also responsible for implementing the Facebook Social Graph and FQL to allow users to select photos from their&nbspaccounts.',
        company          : 'Luxurious Animals',
        year             : '2014',
        url              : 'http://sdzsafaripark.org/stripeyourself/',
        image            : 'images/stripe.jpg',
        client           : 'San Diego Zoo'
    },{
        id               : 13,
        title            : 'Ken Hunt',
        className        : 'ken',
        description      : 'Ken Hunt is an HTML5 game I built as a joke for friend on his birthday.',
        responsibilities : 'Building on what I learned working on the My Little Pony games I rebuilt the classic Nintendo game Duck Hunt, replacing the ducks with my friend Ken\'s head. The game is built with only JavaScript and jQuery with Greensock and CSS for the animations (without using a framework or canvas) and works on touch devices.',
        company          : 'Hexrays',
        year             : '2014',
        image            : 'images/kenhunt.jpg',
        url              : 'http://hexrays.at/stuff/kenhunt/',
        client           : 'Personal project'
    }
];




    // },{
    //     id               : 2,
    //     title            : 'LNKSY',
    //     className        : 'lnksy',
    //     description      : 'A web application created for saving and organizing links. Completed as a final project for a Front-End and Ruby on Rails course at General Assembly in 2013.',
    //     responsibilities : 'The objectives were to demonstrate an understanding of all topics covered in the class and use front-end and back-end web development skills to create a website compatible with many browsers.',
    //     company          : 'Hexrays',
    //     year             : '2013',
    //     image            : 'images/lnksy.jpg',
    //     url              : 'http://lnksy.herokuapp.com/users/1',
    //     keywords         : ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Ruby', 'Ruby on Rails', 'responsive']

        // },{
    //     id               : 12,
    //     title            : 'West Point Foundry Preserve&nbspTour',
    //     className        : 'wpfp',
    //     description      : 'A mobile site built by the Luxurious Animals team, designed for users to tour the West Point Foundry Preserve on mobile phones and tablets.',
    //     responsibilities : 'Built with Backbone. I worked on implementing the interface design and styling throughout the site, built the galleries for the tour stops, and helped out with some of the map functionality.',
    //     company          : 'Luxurious Animals',
    //     year             : '2013',
    //     url              : 'http://foundrytour.org/',
    //     image            : 'images/wpfp.jpg',
    //     keywords         : ['Luxurious Animals', 'HTML', 'CSS', 'JavaScript', 'Backbone', 'Mobile Web App', 'Maps']
        // {
        //     id               : 4,
        //     title            : 'Regulatory Update Article',
        //     className        : 'power',
        //     description      : 'With the regulatory update article we were tasked with the challenge of making reading a list of environmental regulations an interesting experience.' ,
        //     responsibilities : 'I was able to build upon the framework with what I learned on previous projects to make the development of parallax scrolling articles quicker and easier.',
        //     company          : 'Access Intelligence',
        //     year             : '2014',
        //     image            : 'images/power.jpg',
        //     url              : 'http://powermag.com/long-form-stories/bw-power/',
        // },
        // ,{
        //       id               : 7,
        //       title            : 'Retrofitting Article',
        //       className        : 'retro',
        //       description      : 'Retrofitting is part a series of parallax scrolling articles built with Access Intelligence.',
        //       responsibilities : 'With Retrofitting, I was allowed to rework Access Intelligence\'s previously built framework utilizing a more object oriented approach to building JavaScript projects.',
        //       company          : 'Access Intelligence',
        //       year             : '2014',
        //       image            : 'images/retrofitting.jpg',
        //       url              : 'http://interactive.avionicstoday.com/retrofitting-future-airspace-mandates/',
        //   }
