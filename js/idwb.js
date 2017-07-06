/* WEB-iD*/

var date = new Date(); {
	document.getElementById("timeZone").innerHTML =
	"• Your current time is " + date.toTimeString();
}

function getIP(json) {
	document.getElementById("ipAddress").innerHTML =
	"• Your IP address is: " + json.ip;
}
