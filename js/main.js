
window.onload = function () { 
	console.log('Hello World');
}

function startVid() {
	var video = document.getElementById("fountain-video");
	console.log('Playing Video..');
	video.className += " visible";
	video.play();
}