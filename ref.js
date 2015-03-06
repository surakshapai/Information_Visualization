
			var data = [{"x_axis":25,"y_axis":25,"radius":25},{"x_axis":100,"y_axis":100,"radius":10}];
			var circle1 = svg.append("circle")
						.attr("cx",25)
						.attr("cy",25)
						.attr("r",25)
						.style("fill","green");
			
						
			var circles = svg.selectAll("circle")
						.data(data);
			//updating elements
			circles.transition()
					.style("fill","purple");
			
			circles.enter()
					.append("circle")
					.attr("cx",function(d){return d.x_axis;})
					.attr("cy",function(d){return d.y_axis;})
					.attr("r",0)
					.style("fill","purple")
					.transition()
					.attr("r",function(d){return d.radius});
			
			//experimenting with svg
			var path = svg.append("path");
			path.attr("d","M 100 25 l 10 70 l 60 75 L 100 25")
				.attr("stroke", "red" )
				.attr("stroke-width",2)
				.style("fill","none");
	
	  	circles.exit()
				   .transition()
				    .attr("r",0)
					 .remove(); 
					 
					 		
       //radial area
	    var PI = Math.PI;
		
		var areaPoints = [{startAngle:0,endAngle:PI/6,innerRadius:30,outerRadius:100,color:"red"},{startAngle:PI/6,endAngle:PI/3,innerRadius:30,outerRadius:150,color:"yellow"},{startAngle:PI/3,endAngle:PI/2,innerRadius:30,outerRadius:50,color:"green"}];
		
		i=0;
		/*var arc1 = d3.svg.arc()
					.startAngle(function(d){return d.startAngle;})
					.endAngle(function(d){return d.endAngle;})
					.innerRadius(function(d){return d.innerRadius;})
					.outerRadius(function(d){return d.outerRadius;});
		var arc0 = d3.svg.arc()
					.startAngle(function(d){return d.startAngle;})
					.endAngle(function(d){return d.startAngle;})
					.innerRadius(function(d){return d.innerRadius;})
					.outerRadius(100);
					
		
		var arc2 = d3.svg.arc()
					.startAngle(0)
					.endAngle(3.14/2)
					.innerRadius(0)
					.outerRadius(300);
					
			
					
		var chart = d3.select("body").append("svg")
			.attr("class", "chart")
			.attr("width", 700)
			.attr("height", 700).append("svg:g")
			.attr("transform", "translate(300,300)");
			
	    var rad = chart.selectAll("path")
					 .data(areaPoints)
					.enter()
						.append("path")
						.attr("d",arc0)
						.attr("stroke","red")
						.attr("stroke-width",2)
						.style("fill",function(d,i){return d.color;})
						.transition()
							.delay(250)
							.attr("d",arc1);*/
							