#! /usr/bin/env node

const yargs = require('yargs');
let install = require('./install.js');

yargs
  .command(
    'init',
    'init template',
    (yargs) => {},
    () => {
      install();
    }
  )
  .help()
  .argv
