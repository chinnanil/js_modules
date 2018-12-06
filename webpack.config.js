const path=require('path');
const config = {
  entry : './src/index.js',
  output : {
    path : path.resolve(__dirname,'build'),
    filename : 'bundle.js'
  },
  module: {
    rules: [
      {
        test : /\.js$/ ,
        use : [ {loader : 'babel-loader'} ]

      }
    ]
  }
};

module.exports = config;
