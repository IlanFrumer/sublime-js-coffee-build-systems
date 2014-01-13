var fs = require('fs'),
    jade = require('jade'),
    file = process.argv.pop();

fs.readFile(file, 'utf8', function(err, str){
  if(err) {
    console.log(err);
  } else {
    console.log(jade.compile(str,{pretty: true})() + '\n')
  }
});
