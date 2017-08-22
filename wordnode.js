//file loading
var path = 'adventures-of-sherlock-holmes.txt';
var fs = require('fs');




//SPEAKEASY
var mood = require("speakeasy-nlp").sentiment;
var meaning = require("speakeasy-nlp");

//NATURAL
var natural = require('natural');
var tokenizer = new natural.WordTokenizer();

//NLP-TOOLKIT
var nlptoolkit = require('nlp-toolkit');


//BASIC FILEREADER
function filereader(path)  {
    fs = require('fs');
    file = fs.readFile(path, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
            console.log(data);
    });
   // console.log(tokenizer.tokenize(file));
    return file;
}
//BASIC LINEREADER THAT READS A FILE ONE LINE AT A TIME
function linereader(path) {
    var readline = require('linebyline'),
        linereader = readline(path);
        linereader.on('line', function (line, lineCount, byteCount) {
            console.log(line);
        }).on('error', function (e) {
            console.log(e);
        });
}
//BASIC FILE STREAKER WHICH TREATS THE FILE AS A STREAM
function streamreader(path) {
    var fs = require('fs'),
        readline = require('readline');

    var rd = readline.createInterface({
        input: fs.createReadStream(path),
        output: process.stdout,
        console: false
    });

    rd.on('line', function(line) {
        console.log(line);
    });
}



//-----BEGIN USAGE OF FUNCTIONS AND LIBRARIES
//linereader(path);
//streamreader(path);
//filereader(path);

var file = fs.readFileSync(path, "utf8");

//CONSOLE LOG OF FILE ACTIVITIES
console.log(meaning.classify(file));
console.log(mood.analyze(file));
// console.log(tokenizer.tokenize(file));
// console.log(natural.PorterStemmer.stem(file));
