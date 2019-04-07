//Margin
var margin = {left:80, right:20, top:50, bottom:100};

var width = 600 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var i = 0;

var year;


//SVG
var g = d3.select('#chart-area')
    .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
    .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');



//X Scale
var x = d3.scaleBand()
    .domain(['Black', 'Histanic', 'Other', 'White'])
    .range([0, width])
    .padding(0.2);

//Y Scale
var y = d3.scaleLinear()
    .domain([0, 120000])
    .range([height, 0]);

//X Axis
var xAxisCall = d3.axisBottom(x);
g.append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + height + ')')
    .call(xAxisCall);
    
//Y Axis
var yAxisCall = d3.axisLeft(y)
    .tickFormat(function(d){return '$' + d; })
g.append('g')
    .attr('class', 'y axis')
    .call(yAxisCall);

//X Label
g.append('text')
    .attr('y', height + 50)
    .attr('x', width/2)
    .attr('font-size', '20px')
    .attr('text-anchor', 'middle')
    .text('Ethnicity');

//Y Label
g.append('text')
    .attr('y', -60)
    .attr('x', -(height/2))
    .attr('font-size', '20px')
    .attr('text-anchor', 'middle')
    .attr('transform', 'rotate(-90)')
    .text('Average Income');

var timeLabel = g.append("text")
    .attr("y", 30)
    .attr("x", 60)
    .attr("font-size", "40px")
    .attr("opacity", "0.4")
    .attr("text-anchor", "middle")
    .text("1989");


d3.json('data/racialIncomes.json').then(function(data){
    //console.log(data);
        
    d3.interval(function(){
        console.log(Object.values(data[i].standings[0]));
        //update(Object.values(data[i].standings[0]));
        year = data[i].year;
        console.log(year);
        update(Object.values(data[i].standings[0]));
        i++;
        if( i > 9){
            i=0;
        }
    }, 5000);

    //update(Object.values(data[i].standings[0]));
})

function update(data){
    // Standard transition time for the visualization
    var t = d3.transition()
        .duration(2000);
    //Join
    var rects = g.selectAll('rect')
    
    .data(data);

    //Exit
    rects.exit()        
    .transition(t)
        .duration(1500)
        .remove();
    
    //enter
    rects.enter()
        .append('rect')
            .attr('fill', 'green')
            .attr("y", y(0))
            .attr("height", 0)
            .attr('x', function(d,i){return (i * 120) + 20})
            .attr('width', x.bandwidth)
        .merge(rects)
        .attr('fill', 'green')
        .transition(t)
            .duration(1500)
            .attr('y', function(d){return y(d); })
            .attr('height', function(d){return height - y(d); })
            .attr('fill', 'black');

    timeLabel.text(year)
}