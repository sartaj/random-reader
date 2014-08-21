var app = require('express')();
var fs = require('fs');
var textReader = require('./lib/text-reader');
var rand = require('random-el');


/*
 * Line
 */


/*
 * Server
 */

app.get('/', function(req, res) {

  console.log("INDEX");
  var availableFiles = fs.readdirSync('text_files');

  availableFiles.forEach(function(item, index, array) {
    item = item.slice(0, item.length - 4);
    availableFiles[index] = '<a href="/' + item + '">' + item + '</a>';
  });

  availableFiles = availableFiles.join('<br />\n');

  res.send(availableFiles);

});

app.get('/available', function(req, res) {

  console.log("AVAILABLE");
  var availableFiles = fs.readdirSync('text_files');

  availableFiles.forEach(function(item, index, array) {
    availableFiles[index] = item.slice(0, item.length - 4);
  });

  availableFiles = availableFiles.join('\n');

  res.send(availableFiles);

});

app.get('/:fileToGet', function(req, res) {

  console.log("GETTING FILE", req.params.fileToGet);
  var text = textReader('text_files/' + req.params.fileToGet + '.txt');
  res.send(rand(text));

});

var port = Number(process.env.PORT || 5000);

app.listen(port, function() {
  console.log('listening at %s ', port);
});