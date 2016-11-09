'use strict';

let exercise = require('workshopper-exercise')();
let filecheck = require('workshopper-exercise/filecheck');
let execute = require('workshopper-exercise/execute');
let comparestdout = require('workshopper-exercise/comparestdout');
let wrappedexec = require('@timothygu/workshopper-wrappedexec');

// checks that the submission file actually exists
exercise = filecheck(exercise);

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise);

// compare stdout of solution and submission
exercise = comparestdout(exercise);

// make sure Promise is available
// and wrap Promise with hooks used to check if the user used Promises as
// instructed
exercise = wrappedexec(exercise, 'all');

// check if hooks have been activated
exercise.addVerifyProcessor(function (callback) {
  let __ = this.__;
  let ok = true;

  process.nextTick(function () {
    callback(null, ok);
  });
});

module.exports = exercise;