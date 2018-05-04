const bl = require('bl');
const http = require('http');

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    var temp = data.toString();
    console.log(temp.length);
    console.log(temp);
  }));
}).on('error', console.error);
