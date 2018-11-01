 devServer: {
    historyApiFallback: true,
    contentBase: './',
    proxy: {
      '/listbuckets': {
        target: 'https://s3.amazonaws.com',
        changeOrigin: true
      }
    }
  }
