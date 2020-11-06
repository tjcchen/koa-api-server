// es6 files support, like .js, .jsx etc.
require('@babel/register');

// es6 polyfill support
require('core-js/stable'); 
require('regenerator-runtime/runtime');

require('./app/app.js');