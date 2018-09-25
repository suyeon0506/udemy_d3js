/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

/*var svg = d3.select("#chart-area").append("svg")
	.attr("width", 400)
	.attr("height", 400);

var circle = svg.append("circle")
	.attr("cx", 100)
	.attr("cy", 250)
	.attr("r", 70)
	.attr("fill", "grey");*/

/*var svg = d3.select("#chart-area").append("svg")
		.attr("width","500")
		.attr("height","500");*/

d3.json("data/buildings.json").then(function(data){
	console.log(data);

	data.forEach(function(d){
		d.height = +d.height
	});

	var svg = d3.select("#chart-area").append("svg")
		.attr("width","500")
		.attr("height","500");

	var rects = svg.selectAll("rect")
		.data(data);

	rects.enter()
		.append("rect")
			.attr("x", function(d,i){
				return i*60 + 20;
			})
			.attr("y",0)
			.attr("width",20)
			.attr("height",function(d){
				return d.height;
			})
			.attr("fill","grey")
}).catch(function(error){
	console.log(error);
})