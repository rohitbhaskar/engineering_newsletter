var app = angular.module('TIAApp', []);


app.filter('split', function() {
        return function(input, splitChar, splitIndex) {
            // do some bounds checking here to ensure it has that index
            return input.split(splitChar)[splitIndex];
        }
    });


app.controller('MainCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";



    $scope.sections=[
    	{
    		// General Details
    		name: "competitions",

    		// Header
    		header_img_url: "",
    		header_img_name: "",
    		header_bg_color : function() {return "#7CB342";},
    		header_text: "Competitions",

    		// Sub-Header
    		subheader_text: "",

    		// Content (Body)
    		content: [
    			{
    				header: "Elememt14 | Design for a cause challenge",
    				description: "Free Development Kit to hack around, showcase your talent and help the world. Do you need anything more exciting than that!?",
    				link_url: "https://www.element14.com/community/docs/DOC-89667/l/design-for-a-cause-challenge-about-this-challenge",
    				link_text: "element14.com"
    			}

    			// {
    			// 	header: "",
    			// 	description: "",
    			// 	link_url: "",
    			// 	link_text: ""
    			// }
    		]
    	},





    	{
    		// General Details
    		name: "internships",

    		// Header
    		header_img_url: "",
    		header_img_name: "",
    		header_bg_color : function() {return "#00897B";},
    		header_text: "Internships",

    		// Sub-Header
    		subheader_text: "",

    		// Content (Body)
    		content: [
    			{
    				header: "Marketing Coordinator | Zaya Learning Labs",
    				header_icon:"",
    				description: "No stipend, but its a startup, so you'll learn a lot (Not like interns get a huge amount of money anyway ;p)",
    				link_url: "https://angel.co/zaya-learning-labs/jobs/20754-marketing-coordinator",
    				link_text: "angel.co",
    				link_icon: ""
    			}
    		]
    	},




    	{
    		// General Details
    		name: "news",

    		// Header
    		header_img_url: "",
    		header_img_name: "",
    		header_bg_color : function() {return "#00ACC1";},
    		header_text: "News",

    		// Sub-Header
    		subheader_text: "",

    		// Content (Body)
    		content: [
    			{
    				header: "Net neutrality died on Monday",
    				description: "Here lies the free and open internt...killed by greed",
    				link_url: "https://www.cnet.com/news/net-neutrality-is-now-really-officially-dead-open-internet-congress-now-what/",
    				link_text: "cnet.com"
    			},
    			{
    				header: "Bitcoin falls 10% after a Korean exchange got hacked",
    				description: "Bitcoin has been a roller coaster ride that just gets thrilling every month :P",
    				link_url: "https://qz.com/1301699/bitcoin-crashed-after-south-korean-exchange-coinrail-was-hacked/",
    				link_text: "quartz"
    			}
    		]
    	},




    	{
    		// General Details
    		name: "learn",

    		// Header
    		header_img_url: "",
    		header_img_name: "",
    		header_bg_color : function() {return "#3949AB";},
    		header_text: "Learn",

    		// Sub-Header
    		subheader_text: "",

    		// Content (Body)
    		content: [
    			{
    				header: "Learn JavaScript with this amazing old-school-feel terminal game",
    				description: "",
    				link_url: "https://github.com/olistic/warriorjs",
    				link_text: "github.com"
    			},
    			{
    				header: "Amazing tech talks curated by the tech community",
    				description: "",
    				link_url: "https://awesometalks.party/",
    				link_text: "awesometalks"
    			},
    			{
    				header: "Learn DNS over HTTP through cartoons",
    				description: "With privacy and security being what it is now days, its good to be prepared. So here's a Firefox dev explaining DNS over HTTPS (DoH) using...well...cartoons :)",
    				link_url: "https://hacks.mozilla.org/2018/05/a-cartoon-intro-to-dns-over-https/",
    				link_text: "mozilla.org"
    			},
    			{
    				header: "",
    				description: "",
    				link_url: "",
    				link_text: ""
    			}
    		]
    	},




    	{
    		// General Details
    		name: "cool_stuff",

    		// Header
    		header_img_url: "",
    		header_img_name: "",
    		header_bg_color : function() {return "#8E24AA";},
    		header_text: "Cool Stuff",

    		// Sub-Header
    		subheader_text: "",

    		// Content (Body)
    		content: [
    			{
    				header: "Smart robotic skin that heals itself. Even if you shoot it full of holes. (Yeah you read that right)",
    				description: "",
    				link_url: "https://futurism.com/soft-robots-skin-automatically-heals",
    				link_text: "futurism.com"
    			},
    			{
    				header: "5D Glass Discs Store 3000x More Info Than CDs",
    				description: "",
    				link_url: "https://futurism.com/videos/glass-future-data-storage/",
    				link_text: "futurism.com"
    			},
    			{
    				header: "WTF - A complete dashboard that runs in the terminal.",
    				description: " Includes Google calendar, clock, weather, git repos. (It might or might not improve your work flow, but will sure as hell look cool)",
    				link_url: "https://wtfutil.com",
    				link_text: "wtfutil.com"
    			},
    			{
    				header: "How data storage on DNA works",
    				description: "(Yeah...either we are progressing too fast, or you're getting old quick )",
    				link_url: "www.wolfcast.co.uk/all/2018/6/3/massive-attack-will-live-on-forever-quite-literally",
    				link_text: "wolfcast.co.uk"
    			},
    			{
    				header: "",
    				description: "",
    				link_url: "",
    				link_text: ""
    			},
    			{
    				header: "",
    				description: "",
    				link_url: "",
    				link_text: ""
    			},
    		]
    	},




    	{
    		// General Details
    		name: "take_a_break",

    		// Header
    		header_img_url: "",
    		header_img_name: "",
    		header_bg_color : function() {return "#D81B60";},
    		header_text: "Take a break",

    		// Sub-Header
    		subheader_text: "",

    		// Content (Body)
    		content: [
    			{
    				header: "Chess tournament in Dadar (has an entry fee)",
    				description: "",
    				link_url: "https://www.eventshigh.com/detail/Mumbai/0bf869768bb6d32e2e457da86c3f733b-dadar-saurabh-barve-blitz-rating",
    				link_text: ""
    			},
    			{
    				header: "",
    				description: "",
    				link_url: "",
    				link_text: ""
    			}
    		]
    	},

    ]

});