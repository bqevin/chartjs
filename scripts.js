    var sampleData = [23,43,54,94,23,54,36,96,100,5,66,18,45, 68, 15, 54, 45,10 ];
          
    function drawBarChart(dataset) {
        var chartContainer = document.getElementById("div1");
        var widthOfContainer = chartContainer.scrollWidth;
    	var heightOfContainer = chartContainer.scrollHeight;
    	var widthOfBar = parseInt(widthOfContainer / dataset.length) -2;

    	if (typeof(dataset) !== 'object') {
    		return;
    	}
        //create canvas element
        var canvasElement = document.createElement("canvas");

        //attributes of canvas element
        canvasElement.setAttribute("id", "myCanvas");

        //set styles
        canvasElement.width = widthOfContainer;
        canvasElement.height = heightOfContainer;

        var barCanvas = canvasElement;
        var context = barCanvas.getContext('2d');

    	for (var j = 0; j < dataset.length; j++) {
            //create height, width of rect
            var marginLeft = parseInt(j * 2 + j * widthOfBar);
            var height = parseInt(dataset[j]);
            var width = parseInt(widthOfBar);
            var top = parseInt(heightOfContainer - parseInt(dataset[j]) - 1);

            context.fillStyle ='#EE6600';
            context.fillRect(marginLeft, top, width, height);
            // console.log(marginLeft,top,width,height);
    	}
        // console.log(chartContainer);
        chartContainer.appendChild(canvasElement);

        document.getElementById("div3").innerHTML ="There's your Bar Chart";
    }



    function drawLineChart(dataset) {
        var chartContainer = document.getElementById("div1");
        var widthOfContainer = chartContainer.scrollWidth;
        var heightOfContainer = chartContainer.scrollHeight;
        var widthOfBar = parseInt(widthOfContainer / dataset.length) -2;

        if (typeof(dataset) !== 'object') {
            return;
        }
        //create canvas element
        var canvasElement = document.createElement("canvas");

        //attributes of canvas element
        canvasElement.setAttribute("id", "myCanvas");

        //set styles
        canvasElement.width = widthOfContainer;
        canvasElement.height = heightOfContainer;

        var barCanvas = canvasElement;
        var context = barCanvas.getContext('2d');

        for (var j = 0; j < dataset.length; j++) {
            //create height, width of rect
            var marginLeft = parseInt(j * 2 + j * widthOfBar);
            var cirMarginLeft = parseInt((j * 2 + j * widthOfBar) + (widthOfBar/2));
            var height = parseInt(dataset[j]);
            var width = parseInt(widthOfBar);
            var top = parseInt(heightOfContainer - parseInt(dataset[j]) - 1);

            context.beginPath();
            context.moveTo(parseInt(((j-1) * 2 + (j-1) * widthOfBar) + (widthOfBar/2)), parseInt(heightOfContainer - parseInt(dataset[j-1]) - 1));
            context.lineTo(cirMarginLeft, top);
            context.arc(cirMarginLeft, top, 5, 0*Math.PI, 2*Math.PI);
            context.fillStyle ='#000000';
            context.fill();
            // console.log(marginLeft,top,width,height);
        }
        // console.log(chartContainer);
        chartContainer.appendChild(canvasElement);

        document.getElementById("div3").innerHTML ="There's your Line Chart";
    }




    function drawHistogram(dataset) {
        var chartContainer = document.getElementById("div1");
        var widthOfContainer = chartContainer.scrollWidth;
        var heightOfContainer = chartContainer.scrollHeight;
        var widthOfBar = parseInt(widthOfContainer / dataset.length) -2;

        if (typeof(dataset) !== 'object') {
            return;
        }
        //create canvas element
        var canvasElement = document.createElement("canvas");

        //attributes of canvas element
        canvasElement.setAttribute("id", "myCanvas");

        //set styles
        canvasElement.width = widthOfContainer;
        canvasElement.height = heightOfContainer;

        var barCanvas = canvasElement;
        var context = barCanvas.getContext('2d');

        for (var j = 0; j < dataset.length; j++) {
            //create height, width of rect
            var marginLeft = parseInt(j * 2 + j * widthOfBar);
            var cirMarginLeft = parseInt((j * 2 + j * widthOfBar) + (widthOfBar/2));
            var height = parseInt(dataset[j]);
            var width = parseInt(widthOfBar);
            var top = parseInt(heightOfContainer - parseInt(dataset[j]) - 1);

            //the bars
            context.fillStyle ='#EE6600';
            context.fillRect(marginLeft, top, width, height);
            //the lines and points
            context.beginPath();
            context.moveTo(parseInt(((j-1) * 2 + (j-1) * widthOfBar) + (widthOfBar/2)), parseInt(heightOfContainer - parseInt(dataset[j-1]) - 1));
            context.lineTo(cirMarginLeft, top);
            context.arc(cirMarginLeft, top, 4, 0*Math.PI, 2*Math.PI);
            context.fillStyle ='#000000';
            context.fill();
            
        }
        chartContainer.appendChild(canvasElement);

        document.getElementById("div3").innerHTML ="There's your Histogram";
    }




    function drawPieChart(dataset) {
        var chartContainer = document.getElementById("div1");

        if(typeof(dataset) != 'object'){
            return;
        }

        chartContainer.appendChild(canvasElement);

        document.getElementById("div3").innerHTML ="There's your Histogram";
    }

    drawPieChart(sampleData);
   
