// Simple Express reverse proxy
var express = require("express");
var url = require('url');
var app = express();
var request = require('request');
var apiUrl = 'http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?lat=';
app.get('/flights', function(req,res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
    return;
  }

  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  var newurl = apiUrl +query.lat+'&lng='+query.lng+'&fDstL=0&fDstU=100';
  request(newurl, (err, response, body)=>{
    if(!err && response.statusCode === 200) {
      let jsonResponse = JSON.parse(body);
      if (query.id) {
        for(let i = 0; i < jsonResponse.acList.length; i++) {
          if(jsonResponse.acList[i].Id === Number.parseInt(query.id)){
            res.send(jsonResponse.acList[i]);
          }
        }
        res.send();
      } else {
        res.send(jsonResponse);
      }
    }
  });
});
app.listen(3001);