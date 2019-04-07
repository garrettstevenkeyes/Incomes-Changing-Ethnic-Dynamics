## How to open the file

To open the graph you have to use python to local host a server. 
First in the console navigate to the greater folder holding all the files. 
Then you have to run the command python -m http.server 8000 . 
This will launch the server. YOu can use a different server number if you want, it doesn't matter just dictatices where the local host is.
From there you go to localhost:8000 in your browser. All browsers will work but using google chrome incognitio is best. Incognito to avoid chromes cashing feature.


## How it was made

To make this I used  the d3.js library. First in the HTML I created a basic outline that would designate where my chart will go and included all of my dependencies.
From there I created a basic CSS file to deiplay the chart in a block.
I think created a JSON file in the path of my project.
Next I created a javascript file that would hold my project. Using D3 I generated the SVG canvas, height, and margins for my visualization.
From there I accessed my json file using the d3.json selector. Next as my data was an array with nested arrays in each representing years I had to write some code to select each value for the ethnicities by year.

Following this I created the scales for my chart.
For the X axis I hard coded columns to represent each ethnicity. And for the Y-axis I created a linear scale. 

Next I created the axis labels using the d3.axis built in's. 

And then I made the bars to represent the values fromth e first year of my data set.

At this point I had a static bar chart representing one year of data. 

Fromt there I needed to introduce the update function and re-shuffle code. I joined the data on the rectanges and selected rectangles to also be exited fromt he screen. 
I then entered the rectangles x and y components into the update function, merged the data on recatangles and after the merger chose to re-enter the Y values and bar heights, as those are what is changing.

## Dependencies

HTML5

CSS

Javascript ES6

d3.JS Library
