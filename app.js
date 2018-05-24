$(document).ready(function(){
	var long;
	var lat;
	if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    long = position.coords.latitude;
    lat = position.coords.longitude;
    $("#data").html("latitude: " + lat + "<br>longitude: " + long);
  });
}
//create api with geolocal
var api ="http://samples.openweathermap.org/data/2.5/weather?lat='+lat+'&lon=''&appid=b6907d289e10d714a6e88b30761fae22";
//$.getJSON(api,function(data){})//