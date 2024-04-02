import CanvasJS from '@canvasjs/charts';
window.onload = function () {
	if(document.querySelector('.graph-content')){

		var chart01 = new CanvasJS.Chart("chartContainer01", {
			// width:768,
			// height:500,
			animationEnabled: true,
			animationDuration: 1000,
			axisX: {
				labelFontSize: 14,
				labelFormatter: function (e) {
					return CanvasJS.formatDate( e.value, "DD.MM.YYYY");
				},
				gridThickness: 2,
				gridColor: "#c4c4c480",
				lineColor: '#c4c4c480',
				tickLength: 10,
      		tickColor: "#c4c4c480",
				tickThickness: 2
			},
			axisY: {
				valueFormatString:'####',
				labelFontSize: 14,
				minimum: 2100,
				maximum: 3000,
				gridThickness: 2,
				gridColor: "#c4c4c480",
				lineColor: '#c4c4c480',
				tickLength: 10,
      		tickColor: "#c4c4c480",
				tickThickness: 2
			},
			toolTip: {
				cornerRadius: 8,
				fontColor: "#000",
				fontSize: 16,
				borderColor: "#BF5C7A",
				backgroundColor: "#fdfafb",
			},
			data: [
				{
					type: "spline",
					lineColor:'#BF5C7A',
					markerSize: 14,
					markerColor: '#BF5C7A',
					dataPoints: [
						{ x: new Date(2010, 0, 3), y: 2300 },
						{ x: new Date(2010, 0, 5), y: 2400 },
						{ x: new Date(2010, 0, 7), y: 2400 },
						{ x: new Date(2010, 0, 9), y: 2450 },
						{ x: new Date(2010, 0, 11), y: 2550 },
						{ x: new Date(2010, 0, 13), y: 2500 },
						{ x: new Date(2010, 0, 15), y: 2600 },
						{ x: new Date(2010, 0, 17), y: 2530 },
					]
				}
			]
		});
		chart01.render();

		var chart02 = new CanvasJS.Chart("chartContainer02", {
			// width:768,
			// height:500,
			animationEnabled: true,
			animationDuration: 1000,
			axisX: {
				labelFontSize: 14,
				labelFormatter: function (e) {
					return CanvasJS.formatDate( e.value, "DD.MM.YYYY");
				},
				gridThickness: 2,
				gridColor: "#c4c4c480",
				lineColor: '#c4c4c480',
				tickLength: 10,
      		tickColor: "#c4c4c480",
				tickThickness: 2
			},
			axisY: {
				valueFormatString:'####',
				labelFontSize: 14,
				minimum: 2100,
				maximum: 3000,
				gridThickness: 2,
				gridColor: "#c4c4c480",
				lineColor: '#c4c4c480',
				tickLength: 10,
      		tickColor: "#c4c4c480",
				tickThickness: 2
			},
			toolTip: {
				cornerRadius: 8,
				fontColor: "#000",
				fontSize: 16,
				borderColor: "#BF5C7A",
				backgroundColor: "#fdfafb",
			},
			data: [
				{
					type: "spline",
					lineColor:'#BF5C7A',
					markerSize: 14,
					markerColor: '#BF5C7A',
					dataPoints: [
						{ x: new Date(2010, 0, 3), y: 2400 },
						{ x: new Date(2010, 0, 5), y: 2400 },
						{ x: new Date(2010, 0, 7), y: 2400 },
						{ x: new Date(2010, 0, 9), y: 2450 },
						{ x: new Date(2010, 0, 11), y: 2550 },
						{ x: new Date(2010, 0, 13), y: 2500 },
						{ x: new Date(2010, 0, 15), y: 2600 },
						{ x: new Date(2010, 0, 17), y: 2530 },
					]
				}
			]
		});
		chart02.render();

		var chart03 = new CanvasJS.Chart("chartContainer03", {
				// width:768,
			// height:500,
			animationEnabled: true,
			animationDuration: 1000,
			axisX: {
				labelFontSize: 14,
				labelFormatter: function (e) {
					return CanvasJS.formatDate( e.value, "DD.MM.YYYY");
				},
				gridThickness: 2,
				gridColor: "#c4c4c480",
				lineColor: '#c4c4c480',
				tickLength: 10,
      		tickColor: "#c4c4c480",
				tickThickness: 2
			},
			axisY: {
				valueFormatString:'####',
				labelFontSize: 14,
				minimum: 2100,
				maximum: 3000,
				gridThickness: 2,
				gridColor: "#c4c4c480",
				lineColor: '#c4c4c480',
				tickLength: 10,
      		tickColor: "#c4c4c480",
				tickThickness: 2
			},
			toolTip: {
				cornerRadius: 8,
				fontColor: "#000",
				fontSize: 16,
				borderColor: "#BF5C7A",
				backgroundColor: "#fdfafb",
			},
			data: [
				{
					type: "spline",
					lineColor:'#BF5C7A',
					markerSize: 14,
					markerColor: '#BF5C7A',
					dataPoints: [
						{ x: new Date(2010, 0, 3), y: 2500 },
						{ x: new Date(2010, 0, 5), y: 2400 },
						{ x: new Date(2010, 0, 7), y: 2400 },
						{ x: new Date(2010, 0, 9), y: 2450 },
						{ x: new Date(2010, 0, 11), y: 2550 },
						{ x: new Date(2010, 0, 13), y: 2500 },
						{ x: new Date(2010, 0, 15), y: 2600 },
						{ x: new Date(2010, 0, 17), y: 2530 },
					]
				}
			]
		});
		chart03.render();
	}
}