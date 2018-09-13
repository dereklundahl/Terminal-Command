const fs = require('fs');


module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file}`;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = (fileName) => {
  fs.writeFile(fileName, 'Test file', err => {
    if(err)throw err;
    console.log(`File ${fileName} has been created`);
  });
};

module.exports.mkdir = (directoryName) => {
  fs.mkdir(directoryName);
    console.log(`Directory ${directoryName} has been created`);
};
