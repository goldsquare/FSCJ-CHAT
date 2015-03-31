var app = angular.module('app', [], function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});

var myData = new Firebase('https://vivid-inferno-434.firebaseio.com');


app.controller('MyCtrl', function ($scope, $http) {

	$scope.name = "bob";
	$scope.message = "hey guys";


	$scope.sendMessage = function () {

		// send message and user to firebase
		var name = $('#name').val();
		console.log(name);
		var message = $('#message').val();
		console.log(message);
		var number = $('#number').val();
		console.log(number);

		myData.push({name: name, message: message, number: number});

		document.getElementById("name").value = '';
		document.getElementById("message").value = '';
		document.getElementById("number").value = '';
	}

	// listen for user and message 
	myData.on('child_added', function(data) {

		var data = data.val();
		displayChatMessage(data.name, data.message, data.number);

	});

	// display user and message on the screen
	  function displayChatMessage(name, message, number) {
        $('<h4/>').text(name+': ').appendTo($('#userText'));
        $('<h4/>').text(message).appendTo($('#messageText'));
        $('<h4/>').text(number).appendTo($('#numberText'));
        $('#messageBox')[0].scrollTop = $('#messageBox')[0].scrollHeight;
      };




});









