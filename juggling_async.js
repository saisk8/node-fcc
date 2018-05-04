const http = require('http');
const concatStream = require('concat-stream');

const urls = process.argv.slice(2);
const results = [];
let resultsCount = 0;

urls.forEach((url, i) => {
  http.get(url, (response) => {
    response.setEncoding('utf8');

    response.pipe(concatStream((data) => {
      results[i] = data;
      resultsCount += 1;

      if (resultsCount === urls.length) {
        results.forEach((result) => {
          console.log(result); // eslint-disable-line
        });
      }
    }));
  });
});
