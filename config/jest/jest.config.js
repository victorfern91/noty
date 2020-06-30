module.exports = {
  rootDir: '../../',
  transform: {
    '\\.js$': [
      'babel-jest', { configFile: './config/babel/babel.config.js' }
      ]
  }
};
