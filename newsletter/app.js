var app = angular.module('TIAApp', []);


app.controller('MainCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";



    $scope.sections=[
    	{
    		// General Details
    		name: "competitions",

    		// Header
    		header_img_link: "",
    		header_img_name: "",
    		header_bg_color: "",
    		header_text: "Competitions",

    		// Sub-Header
    		subheader_text: "",

    		// Content (Body)
    		content: [
    			{
    				header: "",
    				description: "",
    				link_url: "",
    				link_text: ""
    			}
    		]
    	}
    ];


    $scope.test_sections=[
    	{
    		// General Details
    		name: "competitions",

    		// Header
    		header_img_url: "https://i.imgur.com/flb3wf7.jpg",
    		header_img_name: "",
    		header_bg_color: "",
    		header_text: "Competitions",

    		// Sub-Header
    		subheader_text: "",

    		// Content (Body)
    		content: [
    			{
    				header: "Material Design Email Template",
    				description: "This is an html email template based on Google's Material Design. This template has been tested on 33 major email clients using Litmus Builder. Feel free to use this for whatever purpose.",
    				link_url: "",
    				link_text: ""
    			},
    			{
    				header: "Related Other Template",
    				description: "Related other deisciption",
    				link_url: "",
    				link_text: ""
    			}
    		]
    	},
    	{
    		// General Details
    		name: "news",

    		// Header
    		header_img_url: "https://i.imgur.com/flb3wf7.jpg",
    		header_img_name: "",
    		header_bg_color: "",
    		header_text: "News",

    		// Sub-Header
    		subheader_text: "",

    		// Content (Body)
    		content: [
    			{
    				header: "Some Other Template",
    				description: "Some other deisciption",
    				link_url: "",
    				link_text: ""
    			}
    		]
    	}
    ]

});