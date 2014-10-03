/**
 * Run `node import.js` to import the sample data into the db.
 */

var async = require('async');

// sample data
var clients = require('./clients.json');
var tasks = require('./tasks.json');
var timesheets = require('./timesheets.json');

module.exports = function(app, cb) {
  var Client = app.models.Client;
  var Employee = app.models.Employee;
  var Timesheet = app.models.Timesheet;
  var Task = app.models.Task;
  var db = app.dataSources.db;
  function importData(Model, data, cb) {
    // console.log('Importing data for ' + Model.modelName);
    Model.destroyAll(function(err) {
      if (err) {
        cb(err);
        return;
      }
      async.each(data, function(d, callback) {
        Model.create(d, callback);
      }, cb);
    });
  }

  async.series([
    function(cb) {
      db.autoupdate(cb);
    },

    importData.bind(null, Client, clients),
    importData.bind(null, Task, tasks),
    importData.bind(null, Timesheet, timesheets),
  ], function(err/*, results*/) {
    cb(err);
  });
};

if (require.main === module) {
  // Run the import
  module.exports(require('../'), function(err) {
    if (err) {
      console.error('Cannot import sample data - ', err);
    } else {
      console.log('Sample data was imported.');
    }
  });
}
