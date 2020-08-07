const path = require('path');  //node package for getting full directory path in an OS agnostic manner

module.exports = {
    entry: './app/assets/scripts/App.js',  // file that webpack will watch
    output: {       
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')     //this will created a bundled.js file in the 'app' directory
    },
    mode: 'development',            //this gets rid of the warning message
    watch: true                     //this tells webpack to watch the app.js file for changes
}