const path = require('path');  //node package for getting full directory path in an OS agnostic manner

const postCssPlugins = [
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
];

module.exports = {
    entry: './app/assets/scripts/App.js',  // file that webpack will watch
    output: {       
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')     //this will created a bundled.js file in the 'app' directory
    },
    mode: 'development',            //this gets rid of the warning message
    watch: true ,                    //this tells webpack to watch the app.js file for changes
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                   'style-loader',  // style-loader tells the browser to use styles loaded by webpack // THIS one must preceed 'css-loader'
                   'css-loader?url=false',   // css-loader instructs webpack how to load/interpret css files // url=false says not to load images
                    {
                        loader: 'postcss-loader', 
                        options: {
                            plugins: postCssPlugins
                        }
                    }
                ]
            }
        ]
    }
}