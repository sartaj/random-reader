var fs = require('fs');

module.exports = function(file){

    // Read file and convert to array
    var file = fs.readFileSync(file).toString().split("\n");

    // Remove Empty Lines
    for(var x = 0; x < file.length; x++) {
        if(!file[x]){
            file.splice(x,1);
        }
    }

    return file;
}