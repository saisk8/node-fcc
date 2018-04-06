const fs = require('fs');

function afterRead(error, data) {
	if (!error) {
		console.log(data.toString().split('\n').length - 1);
	} else {
		console.error("Error occured");
	}
}

fs.readFile(process.argv[2], afterRead);