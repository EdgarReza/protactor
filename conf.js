exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: {
          'browserName': 'chrome'
      },
      specs: ['todo-spec.js'],
     framework: 'jasmine2' ,
      onPrepare: function() {
          var jasmineReporters = require('C:/DevOps/protractor/node_modules/jasmine-reporters');
          jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(null, true, true)
          );
     }
  

};