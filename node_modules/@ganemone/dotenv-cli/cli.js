#!/usr/bin/env node

const path = require('path');
const dotenv = require('dotenv');
const spawn = require('child_process').spawn;
const argv = process.argv;

dotenv.load({path: '.env'});
let child = spawn(argv[2], argv.slice(3), {
  stdio: 'inherit',
})

child.on('exit', function(exitCode) {
  process.exit(exitCode);
});

process.on('SIGTERM', function() {
  child.kill();
  process.exit();
}); 

process.on('SIGINT', function() {
  child.kill('SIGINT');
  process.exit();
}); 
