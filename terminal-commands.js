const fs = require('fs');


module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file}`;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = () => {

};

module.exports.mkdir = (folder) => {
  fs.mkdir('./', (err, folder) => {
    if (err) throw err;
    console.log(folder);
  });
};
