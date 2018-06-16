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





    $scope.email={
    	// text that appears along side subject
    	preview_text: "Internship Oportunity | Learn JavaScript | Chess Tournament | DNA Data Storage",

    	// website archive url
    	archive_link:"",

    	// logo
    	logo_image:"",
    	logo_link:"",
    	logo_alt_text:"The Indian Engineer Logo"
    }





	$scope.footer={
		icons:[
			{
				image_link:"https://i.imgur.com/ApMgbF2.png",
				image_alt_text:"Github | The Indian Engineer",
				link:"https://github.com/rohitbhaskar/engineering_newsletter"
			},
		]
	}



    $scope.sections=[
    	{
    		// General Details
    		name: "competitions",
    		color : function() {return "#7CB342";},

    		// Header
    		header_img_url: "",
    		header_img_name: "",
    		header_text: "Competitions",

    		// Sub-Header
    		subheader_text: "",

    		// Content (Body)
    		content: [
    			{
    				header: "Element14 | Design for a cause challenge",
    				header_icon:"🎁",
    				description: "Free Development Kit to hack around, showcase your talent and help the world. Do you need anything more exciting than that!? (Idea Submission deadline: 20th June '18)",
    				link_url: "http://bit.ly/element14_competition",
    				link_text: "element14.com"
    			},
    			{
    				header: "HackerEarth | World Music Hackathon",
    				header_icon:"🎵",
    				description: "Software hackathon with themes revolving around using music(Prototype submission deadline: 1st July)",
    				link_url: "http://bit.ly/world-music-hackathon",
    				link_text: "hackerearth.com"
    			}
    		]
    	},





    	{
    		// General Details
    		name: "internships",
    		color : function() {return "#00897B";},

    		// Header
    		header_img_url: "",
    		header_img_name: "",
    		header_text: "Internships",

    		// Sub-Header
    		subheader_text: "",

    		// Content (Body)
    		content: [
    			{
    				header: "Marketing Co-ordinator | Zaya Learning Labs",
    				header_icon:"👨‍💼",
    				description: "No stipend, but its a startup, so you'll learn a lot (Not like interns get a lot of money anyway ;p)",
    				link_url: "http://bit.ly/angellist-marketing-internship",
    				link_text: "angel.co",
    				link_icon: ""
    			}
    		]
    	},




    	{
    		// General Details
    		name: "news",
    		color : function() {return "#00ACC1";},

    		// Header
    		header_img_url: "",
    		header_img_name: "",
    		header_text: "News",

    		// Sub-Header
    		subheader_text: "",

    		// Content (Body)
    		content: [
    			{
    				header: "Net neutrality dead in the states?",
    				header_icon:"🌐",
    				description: "The fallout from the end of open and equal internet",
    				link_url: "http://bit.ly/fcc-net-neutrality",
    				link_text: "cnet.com"
    			},
    			{
    				header: "Bitcoin falls 10% after a Korean exchange got hacked",
    				header_icon:"📉",
    				description: "Bitcoin has been a roller coaster ride that just gets thrilling every month :P",
    				link_url: "http://bit.ly/bitcoin-crash-10",
    				link_text: "quartz"
    			}
    		]
    	},




    	{
    		// General Details
    		name: "learn",
    		color : function() {return "#3949AB";},

    		// Header
    		header_img_url: "",
    		header_img_name: "",
    		header_text: "Learn",

    		// Sub-Header
    		subheader_text: "",

    		// Content (Body)
    		content: [
    			{
    				header: "Learn Javascript by playing games",
    				header_icon:"🎮",
    				description: "Do you ever get bored learning javascript the same old way? Learn it by playing a command line game",
    				link_url: "http://bit.ly/github-javascript-game",
    				link_text: "github.com"
    			},
    			{
    				header: "Amazing tech talks curated by the community",
    				header_icon:"📢",
    				description: "",
    				link_url: "http://bit.ly/awesome-tech-talks",
    				link_text: "awesometalks"
    			},
    			{
    				header: "DNS over HTTPS explained through cartoons",
    				header_icon:"🔐",
    				description: "Like comic strips? Learn more about the working of the connected world as a Firefox dev explains DNS over HTTPS (DoH) using...well...cartoons :)",
    				link_url: "http://bit.ly/dns-https",
    				link_text: "mozilla.org"
    			},
    			{
    				header: "Learn about convolutional neural networks in 2 minutes",
    				header_icon:"🕸",
    				description: "",
    				link_url: "http://bit.ly/sravjti-cnn",
    				link_text: "sra blog"
    			}
    		]
    	},




    	{
    		// General Details
    		name: "cool_stuff",
    		color : function() {return "#8E24AA";},

    		// Header
    		header_img_url: "",
    		header_img_name: "",
    		header_text: "Cool Stuff",

    		// Sub-Header
    		subheader_text: "",

    		// Content (Body)
    		content: [
    			{
    				header: "The future terminator just got another upgrade",
    				header_icon:"🤖",
    				description: "Smart robotic skin that heals itself. Even if you shoot it full of holes. (Yeah you read that right)",
    				link_url: "http://bit.ly/soft-robotic-skin",
    				link_text: "futurism.com"
    			},
    			{
    				header: "5D Glass Discs Store 3000x More Info Than CDs",
    				header_icon:"💿",
    				description: "",
    				link_url: "http://bit.ly/5d-storage",
    				link_text: "futurism.com"
    			},
    			{
    				header: "WTF - A complete dashboard that runs in the terminal.",
    				header_icon:"💻",
    				description: " Includes Google calendar, clock, weather, git repos. (It might or might not improve your work flow, but will sure as hell look cool)",
    				link_url: "http://bit.ly/terminal-dashboard",
    				link_text: "wtfutil.com"
    			},
    			{
    				header: "How data storage on DNA works",
    				header_icon:"⚗",
    				description: "(Yeah...either we are progressing too fast, or you're getting old quick )",
    				link_url: "http://bit.ly/data-dna-storage",
    				link_text: "wolfcast.co.uk"
    			},
    			{
    				header: "DeepMind built an AI that imagines",
    				header_icon:"🤔",
    				description: "The company’s latest advance that translates 2D pictures to 3D images could lead to machines that can make better sense of a scene",
    				link_url: "http://bit.ly/deepmind-imagines",
    				link_text: "sciencemag.org"
    			},
    			{
    				header: "Carrot-enriched concrete",
    				header_icon:"🥕",
    				description: "Material scientists are strengthening structures using plant fibres",
    				link_url: "http://bit.ly/plant-cement",
    				link_text: "economist.com"
    			},
    			{
    				header: "Tripling the energy storage of lithium-ion batteries",
    				header_icon:"🔋",
    				description: "Scientists have synthesized a new cathode material from iron fluoride that surpasses the capacity limits of traditional lithium-ion batteries",
    				link_url: "http://bit.ly/tripling-lithium-storage",
    				link_text: "sciencedaily.com"
    			}
    		]
    	},




    	{
    		// General Details
    		name: "take_a_break",
    		color : function() {return "#D81B60";},

    		// Header
    		header_img_url: "",
    		header_img_name: "",
    		header_text: "Take a break",

    		// Sub-Header
    		subheader_text: "",

    		// Content (Body)
    		content: [
    			{
    				header: "Chess tournament in Dadar (has an entry fee)",
    				header_icon:"♟",
    				description: "",
    				link_url: "http://bit.ly/dadar-chess-tournament",
    				link_text: "eventshigh.com"
    			},
    			{
    				header: "Every Noise At Once",
    				header_icon:"🎶",
    				description: "An interactive website with noises from different musical genres. For the music lover in you",
    				link_url: "http://bit.ly/everynoise-music",
    				link_text: "everynoise.com"
    			},
    			{
    				header: "Make custom designed backgrounds",
    				header_icon:"⛰",
    				description: "Tired of searching of good background wallpapers for your social media profile/website/blog. Go and make a cool one for yourself.",
    				link_url: "http://bit.ly/cool-backgrounds",
    				link_text: "coolbackgrounds.io"
    			}
    			// ,{
    			// 	header: "",
    			// 	description: "",
    			// 	link_url: "",
    			// 	link_text: ""
    			// }
    		]
    	},

    ]

});