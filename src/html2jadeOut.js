var fs = require('fs'),
    html2jade = require('html2jade'),
    file = process.argv.pop();

fs.readFile(file, 'utf8', function(err, str){
  if(err) {
    console.log(err);
  } else {
    html2jade.convertHtml(str,{},function(err,jade){
      console.log (err || jade);
    });
  }
});
