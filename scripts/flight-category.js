function displayFlightCategory()
{
	var canvas = document.getElementById("flight-category-canvas");
	var ctx = canvas.getContext("2d");
	//ctx.lineWidth = 0;
	ctx.fillStyle = "#FF0000";
	ctx.fillRect(5, 5, 40, 40);
}

function fetchMetarXml(stationID)
{
	let response = fetch("https://www.aviationweather.gov/adds/dataserver_current/httpparam?dataSource=metars&requestType=retrieve&format=xml&stationString=KMLB&hoursBeforeNow=1", {mode: 'no-cors'});
	if (response.ok)
	{
		var weatherText = response.text();
	}
	document.write(weatherText);
}