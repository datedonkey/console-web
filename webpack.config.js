var S3Plugin = require('webpack-s3-plugin')
var config = {
      plugins: [
            new S3Plugin({
                  // Exclude uploading of html 
                  exclude: /.*\.html$/,
                  // s3Options are required 
                  s3Options: {
                        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                        region: 'us-east-1'
                  },
                  s3UploadOptions: {
                        Bucket: 'console.datedonkey.com'
                  },
                  cdnizerOptions: {
                        defaultCDNBase: 'https://console.datedonkey.com'
                  }
            })
      ],
      entry: './main.js', // entry point
      output: {
            filename: 'index.js', // place where bundled app will be served
      },
      devServer: {
            inline: true, // autorefresh
            port: 3000 // development port server
      },
      module: {
            loaders: [
                  {
                        test: /\.jsx?$/, // search for js files 
                        exclude: /node_modules/,
                        loader: 'babel-loader',
                        query: {
                              presets: ['es2015', 'react'] // use es2015 and react
                        }
                  }
            ]
      }
}
module.exports = config;