var sampleData = [20,80,-25,8,-5,10,15,10];
function drawBarChart(dataset) {
  var chartContainer = document.getElementById("div1");
  document.getElementById("div1").innerHTML ="";
  var widthOfContainer = chartContainer.scrollWidth;
  var heightOfContainer = chartContainer.scrollHeight;
  //the width of the bar dependent on the size of array
  var widthOfBar = parseInt(widthOfContainer / dataset.length) -2;

  if (typeof(dataset) !== 'object') {
    return;
  }

  //height of bar dependent on the maximum and minimum element in array
  var maxNumber = dataset[0];
  var minNumber = dataset[0];
  for (var i = 1; i < dataset.length; i++) {
    if (dataset[i] > maxNumber) {
      maxNumber = dataset[i];
    }
    else if (dataset[i] < minNumber) {
      minNumber = dataset[i];
    }
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

  //loop to create each bar
  for (var j = 0; j < dataset.length; j++) {
    //variable to store the total height
    var totHeight = 0;
    //create height, width of rect
    var marginLeft = parseInt(j * 2 + j * widthOfBar);
    var height = 0;
    var width = parseInt(widthOfBar);
    var top = 0;
    if ((maxNumber+minNumber) > maxNumber) {
      totHeight = maxNumber;
      height = Math.abs((dataset[j]/totHeight)*heightOfContainer);
      top = parseInt(heightOfContainer - height);
    }
    else if ((maxNumber+minNumber) < maxNumber) {
      totHeight = maxNumber - minNumber;
      height = Math.abs((dataset[j]/totHeight)*heightOfContainer);
      if (dataset[j] < 0) {
        top = ((maxNumber/totHeight)*heightOfContainer);
      }
      else if (dataset[j] > 0) {
        top = heightOfContainer - (height - ((minNumber/totHeight)*heightOfContainer));
      }
    }         

    context.fillStyle ='#EE6600';
    context.fillRect(marginLeft, top, width, height);
  }
  chartContainer.appendChild(canvasElement);
  document.getElementById("div3").innerHTML ="There's your Bar Chart";
}//end of function drawBarChart


//the Line Chart function
function drawLineChart(dataset) {
  var chartContainer = document.getElementById("div1");
  document.getElementById("div1").innerHTML ="";
  var widthOfContainer = chartContainer.scrollWidth;
  var heightOfContainer = chartContainer.scrollHeight;
  var widthOfBar = parseInt(widthOfContainer / dataset.length) -2;

  if (typeof(dataset) !== 'object') {
    return;
  }

  //height of bar dependent on the maximum and minimum element in array
  var maxNumber = dataset[0];
  var minNumber = dataset[0];
  for (var i = 1; i < dataset.length; i++) {
    if (dataset[i] > maxNumber) {
      maxNumber = dataset[i];
    }
    else if (dataset[i] < minNumber) {
      minNumber = dataset[i];
    }
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
    var height = 0;
    var width = parseInt(widthOfBar);
    var top = 0;
    if ((maxNumber+minNumber) > maxNumber) {
      totHeight = maxNumber;
      height = Math.abs((dataset[j]/totHeight)*heightOfContainer);
      top = parseInt(heightOfContainer - height);
    }
    else if ((maxNumber+minNumber) < maxNumber) {
      totHeight = maxNumber - minNumber;
      height = Math.abs((dataset[j]/totHeight)*heightOfContainer);
      if (dataset[j] < 0) {
        top = (maxNumber/totHeight)*heightOfContainer;
      }
      else if (dataset[j] > 0) {
        top = heightOfContainer - (height - ((minNumber/totHeight)*heightOfContainer));
      }
    }

    context.beginPath();
    if ((maxNumber+minNumber) > maxNumber) {
      context.moveTo(parseInt(((j-1) * 2 + (j-1) * widthOfBar) + (widthOfBar/2)), parseInt(heightOfContainer - height));
      context.lineTo(cirMarginLeft, top);
      context.arc(cirMarginLeft, top, 4, 0*Math.PI, 2*Math.PI);
    }
    else if ((maxNumber+minNumber) < maxNumber) {
      if (dataset[j] < 0) {
        context.moveTo(parseInt(((j-1) * 2 + (j-1) * widthOfBar) + (widthOfBar/2)), parseInt((maxNumber/totHeight)*heightOfContainer + height));
        context.lineTo(cirMarginLeft, top+height);
        context.arc(cirMarginLeft, top+height, 4, 0*Math.PI, 2*Math.PI);
      }
      else if (dataset[j] > 0) {
        context.moveTo(parseInt(((j-1) * 2 + (j-1) * widthOfBar) + (widthOfBar/2)), parseInt(heightOfContainer - (height - ((minNumber/totHeight)*heightOfContainer))));
        context.lineTo(cirMarginLeft, top);
        context.arc(cirMarginLeft, top, 4, 0*Math.PI, 2*Math.PI);
      }
    }
    context.fillStyle ='#000000';
    context.fill();
    // console.log(marginLeft,top,width,height);
  }
  chartContainer.appendChild(canvasElement);
  document.getElementById("div3").innerHTML ="There's your Line Chart";
}//end of the line chart function


//the histogram function
function drawHistogram(dataset) {
  var chartContainer = document.getElementById("div1");
  document.getElementById("div1").innerHTML ="";
  var widthOfContainer = chartContainer.scrollWidth;
  var heightOfContainer = chartContainer.scrollHeight;
  var widthOfBar = parseInt(widthOfContainer / dataset.length) -2;

  if (typeof(dataset) !== 'object') {
    return;
  }

  //height of bar dependent on the maximum and minimum element in array
  var maxNumber = dataset[0];
  var minNumber = dataset[0];
  for (var i = 1; i < dataset.length; i++) {
    if (dataset[i] > maxNumber) {
      maxNumber = dataset[i];
    }
    else if (dataset[i] < minNumber) {
      minNumber = dataset[i];
    }
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
    var totHeight = 0;
    //create height, width of rect
    var marginLeft = parseInt(j * 2 + j * widthOfBar);
    var cirMarginLeft = parseInt((j * 2 + j * widthOfBar) + (widthOfBar/2));
    var height = 0;
    var width = parseInt(widthOfBar);
    var top = 0;
    if ((maxNumber+minNumber) > maxNumber) {
      totHeight = maxNumber;
      height = Math.abs((dataset[j]/totHeight)*heightOfContainer);
      top = parseInt(heightOfContainer - height);
    }
    else if ((maxNumber+minNumber) < maxNumber) {
      totHeight = maxNumber - minNumber;
      height = Math.abs((dataset[j]/totHeight)*heightOfContainer);
      if (dataset[j] < 0) {
        top = ((maxNumber/totHeight)*heightOfContainer);
      }
      else if (dataset[j] > 0) {
        top = heightOfContainer - (height - ((minNumber/totHeight)*heightOfContainer));
      }
    }  

    //the bars
    context.fillStyle ='#EE6600';
    context.fillRect(marginLeft, top, width, height);
    //the lines and points
    context.beginPath();
    if ((maxNumber+minNumber) > maxNumber) {
      context.moveTo(parseInt(((j-1) * 2 + (j-1) * widthOfBar) + (widthOfBar/2)), parseInt(heightOfContainer - height));
      context.lineTo(cirMarginLeft, top);
      context.arc(cirMarginLeft, top, 4, 0*Math.PI, 2*Math.PI);
    }
    else if ((maxNumber+minNumber) < maxNumber) {
      if (dataset[j] < 0) {
        context.moveTo(parseInt(((j-1) * 2 + (j-1) * widthOfBar) + (widthOfBar/2)), parseInt((maxNumber/totHeight)*heightOfContainer + height));
        context.lineTo(cirMarginLeft, top+height);
        context.arc(cirMarginLeft, top+height, 4, 0*Math.PI, 2*Math.PI);
      }
      else if (dataset[j] > 0) {
        context.moveTo(parseInt(((j-1) * 2 + (j-1) * widthOfBar) + (widthOfBar/2)), parseInt(heightOfContainer - (height - ((minNumber/totHeight)*heightOfContainer))));
        context.lineTo(cirMarginLeft, top);
        context.arc(cirMarginLeft, top, 4, 0*Math.PI, 2*Math.PI);
      }
    }
    context.fillStyle ='#000000';
    context.fill();            
  }
  chartContainer.appendChild(canvasElement);
  document.getElementById("div3").innerHTML ="There's your Histogram";
}//end of histogram function


//the pie chart function
function drawPieChart(dataset) {
  var chartContainer = document.getElementById("div1");
  document.getElementById("div1").innerHTML ="";
  var widthOfContainer = chartContainer.scrollWidth;
  var heightOfContainer = chartContainer.scrollHeight;

  if(typeof(dataset) !== "object") {
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
        
  var radius = ((heightOfContainer-10)/2);
  var xCenter = widthOfContainer/2;
  var yCenter = heightOfContainer/2;
  var datasetTotal = 0;
  for (var i = 0; i < dataset.length; i++) {
    datasetTotal += dataset[i]; 
  }
  //declare variable called lastEnd
  var lastEnd = 0;
  //loop through the array and get angles
  for (var j = 0; j < dataset.length; j++) {
    //calculate angle representation of element in array
    var angle = (Math.abs(dataset[j])/datasetTotal)*360;

    context.beginPath();
    context.moveTo(xCenter,yCenter);
    context.arc(xCenter, yCenter, radius, lastEnd, (lastEnd + (angle/180)*Math.PI));
    context.lineTo(xCenter,yCenter);

    var hex = '0123456789ABCDEF'.split(''), color = '#', i;
    for (i = 0; i < 6 ; i++) {
      color = color + hex[Math.floor(Math.random() * 16)];
    }
    context.fillStyle=color;
    context.fill();

    lastEnd += Math.PI*(angle/180);
  }
  //add the canvas to the div container element
  chartContainer.appendChild(canvasElement);
  document.getElementById("div3").innerHTML ="There's your Pie Chart";
}