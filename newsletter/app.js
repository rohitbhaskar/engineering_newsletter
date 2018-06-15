var app = angular.module('TIAApp', []);


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
    		header_bg_color : function() {return "#00897B";},
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