    var sampleData = [23,43,54,94,23,54,36,96,100];
    var Container = document.getElementById("div1");

    function drawBarChart(dataset, idOfContainer) {
    	var chartContainer = Container;

    	if(typeof(dataset) != "object") {
    		return;
    	}
    	var widthOfContainer = chartContainer.scrollWidth;
    	var heightOfContainer = chartContainer.scrollHeight;
    	var widthOfBar = parseInt(widthOfContainer / dataset.length) -2;
    	for (var i = 0; i < dataset.length; i++) {
    		//create a div element
    		var divElement = document.createElement("div");

    		//static attributes of the element
    		divElement.setAttribute("class","div2");

    		//dynamis attributes of the object
    		divElement.style.marginLeft = parseInt(i * 2 + i * widthOfBar) + "px";
    		divElement.style.height = parseInt(dataset[i]) + "px";
    		divElement.style.width = parseInt(widthOfBar) + "px";
    		divElement.style.top = (heightOfContainer - parseInt(dataset[i]) - 1) + "px";
    		chartContainer.appendChild(divElement);
    	}
    }
    drawBarChart(sampleData, Container);
      
    var myCanvas = document.getElementById('lineCanvas');
      
    function drawHistogram(dataset, canvas) {
    	var context = myCanvas.getContext('2d');
    	var widthOfContainer = 400;
    	var heightOfContainer = 150;
    	var widthOfBar = parseInt(widthOfContainer / dataset.length) -2;

    	// widthOfBar = 20;

    	if (typeof dataset != 'object') {
    		return;
    	}

    	for (var j = 0; j < dataset.length; j++) {
    		//create height, width of rect
    		var marginLeft = parseInt(j * 2 + j * widthOfBar);
    		var height = parseInt(dataset[j]);
    		var width = parseInt(widthOfBar);
    		var top = (heightOfContainer - parseInt(dataset[j]) - 1);
    		// context.beginPath();
    		context.fillStyle ='#EE6600';
    		context.fillRect(marginLeft, top, width, height);
            console.log(marginLeft,top,width,height);
    	}
    }
   drawHistogram(sampleData, myCanvas);
