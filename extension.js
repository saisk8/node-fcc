const fs = require('fs');

function afterRead(error, data) {
  if (!error) {
    for (element of data) {
      if (element.endsWith('.' + process.argv[3])) {
        console.log(element);
      }
    }
  }
  else {
    console.error("Error occured");
  }
}

fs.readdir(process.argv[2], afterRead)
