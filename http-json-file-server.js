const http = require('http');
const url = require('url');

const getTimestamp = strtime => Date.parse(strtime);

const getUnixTimestamp = strtime => ({
  unixtime: getTimestamp(strtime),
});

const getTimeObj = (strtime) => {
  const date = new Date(getTimestamp(strtime));

  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };
};


http.createServer((req, res) => {
  const urlObj = url.parse(req.url, true);
  const {
    pathname,
  } = urlObj;
  const strtime = urlObj.query.iso;
  let result;

  if (pathname === '/api/unixtime') {
    result = getUnixTimestamp(strtime);
  } else if (pathname === '/api/parsetime') {
    result = getTimeObj(strtime);
  }

  if (result) {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
}).listen(process.argv[2]);
