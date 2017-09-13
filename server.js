// server.jsrdnuor
// where your node app starts

// init project
var express = require('express');
var app = express();
var svg2png = require("svg2png");
var paper = require('paper-jsdom-canvas');


// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/thepipestrip.svg", function (request, response) {
  var jpegs =  ["https://pbs.twimg.com/media/C6f54WXWQAABCyH.jpg", "https://pbs.twimg.com/media/C6f54WXWQAABCyH.jpg", "https://pbs.twimg.com/media/C6f54WXWQAABCyH.jpg", "https://pbs.twimg.com/media/C6knOBmWkAcYXoK.jpg", "https://pbs.twimg.com/media/C66FTWaXEAE8cL2.jpg"];
  var oH = 349, oW = 1200;
  var paramHeight = request.query.nh;
  var paramWidth = request.query.nw;
  var nH = !!paramHeight ? paramHeight : Math.round(Math.random() * (oH - 100)) + 100;
  var nW = !!paramWidth ? paramWidth : Math.round(Math.random() * (oW - 100)) + 100;
  var scale = "";
  if (Math.round(Math.random() * 100) > 25) {
    var sA = Math.round(Math.random() * 10)+1;
    if (Math.round(Math.random())) {
       var sB = Math.round(Math.random() * 10)+1;
       var scale = sA + ", " + sB;    
       oW *= sA;
       oH *= sB;
    } else {
      scale = sA;
      oW *= sA;
      oH *= sA;
    }
    oW = Math.floor(oW);
    oH = Math.floor(oH);
  } 
  var cx = Math.floor(Math.random() * (oW - nW)), cy = Math.floor(Math.random() * (oH - nH));
  var svg = [
    "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"",nW,"\" height=\"",nH,"\"",
    " viewBox=\"", cx, " ", cy, " ", nW, " ", nH, "\">",
    "\n    <image xlink:href=\"",
    jpegs[Math.floor(Math.random()*jpegs.length)], "\" ",
    (scale ? "transform=\"scale(" + scale + ")\" " : ""),
     "name=\"pipestrip\" />\n</svg>"
  ];
  response.setHeader('Content-Type', 'image/svg+xml');
  response.send(svg.join(''));
});

app.get("/thepipestrip.png", function (request, response) {
  var jpegs =  ["https://pbs.twimg.com/media/C6f54WXWQAABCyH.jpg", "https://pbs.twimg.com/media/C6f54WXWQAABCyH.jpg", "https://pbs.twimg.com/media/C6f54WXWQAABCyH.jpg", "https://pbs.twimg.com/media/C6knOBmWkAcYXoK.jpg", "https://pbs.twimg.com/media/C66FTWaXEAE8cL2.jpg"];
  var oH = 349, oW = 1200;
  var paramHeight = request.query.nh;
  var paramWidth = request.query.nw;
  var nH = !!paramHeight ? paramHeight : Math.round(Math.random() * (oH - 100)) + 100;
  var nW = !!paramWidth ? paramWidth : Math.round(Math.random() * (oW - 100)) + 100;
  var scale = "";
  if (Math.round(Math.random() * 100) > 25) {
    var sA = Math.round(Math.random() * 10)+1;
    if (Math.round(Math.random())) {
       var sB = Math.round(Math.random() * 10)+1;
       var scale = sA + ", " + sB;    
       oW *= sA;
       oH *= sB;
    } else {
      scale = sA;
      oW *= sA;
      oH *= sA;
    }
    oW = Math.floor(oW);
    oH = Math.floor(oH);
  } 
  var cx = Math.floor(Math.random() * (oW - nW)), cy = Math.floor(Math.random() * (oH - nH));
  var svg = [
    "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"",nW,"\" height=\"",nH,"\"",
    " viewBox=\"", cx, " ", cy, " ", nW, " ", nH, "\">",
    "\n    <image xlink:href=\"",
    jpegs[Math.floor(Math.random()*jpegs.length)], "\" ",
    (scale ? "transform=\"scale(" + scale + ")\" " : ""),
     "name=\"pipestrip\" />\n</svg>"
  ];
  
  var buff = new Buffer(svg.join());
  svg2png(buff, {width: nW, height: nH}).then(function(output){
    response.setHeader('Content-Type', 'image/png');
    response.send(output);  
  });
});

app.get("/thepipestrip2.png", function (request, response) {
  var jpegs =  ["https://pbs.twimg.com/media/C6f54WXWQAABCyH.jpg", "https://pbs.twimg.com/media/C6f54WXWQAABCyH.jpg", "https://pbs.twimg.com/media/C6f54WXWQAABCyH.jpg", "https://pbs.twimg.com/media/C6knOBmWkAcYXoK.jpg", "https://pbs.twimg.com/media/C66FTWaXEAE8cL2.jpg"];
  var oH = 349, oW = 1200;
  var paramHeight = request.query.nh;
  var paramWidth = request.query.nw;
  var nH = !!paramHeight ? paramHeight : Math.round(Math.random() * (oH - 100)) + 100;
  var nW = !!paramWidth ? paramWidth : Math.round(Math.random() * (oW - 100)) + 100;
  var scale = "";
  if (Math.round(Math.random() * 100) > 25) {
    var sA = Math.round(Math.random() * 10)+1;
    if (Math.round(Math.random())) {
       var sB = Math.round(Math.random() * 10)+1;
       var scale = sA + ", " + sB;    
       oW *= sA;
       oH *= sB;
    } else {
      scale = sA;
      oW *= sA;
      oH *= sA;
    }
    oW = Math.floor(oW);
    oH = Math.floor(oH);
  } 
  var cx = Math.floor(Math.random() * (oW - nW)), cy = Math.floor(Math.random() * (oH - nH));
  var svg = [
    "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"",nW,"\" height=\"",nH,"\"",
    " viewBox=\"", cx, " ", cy, " ", nW, " ", nH, "\">",
    "\n <image xlink:href=\"", 
    jpegs[Math.floor(Math.random()*jpegs.length)], "\" ",
    (scale ? "transform=\"scale(" + scale + ")\" " : ""),
     "name=\"pipestrip\" />\n</svg>"
  ];
  var project = new paper.Project();
  project.importSVG(svg.join());
  project.view.draw();
  project.view.element.toBlob(function(blob) { response.write(blob);});
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
