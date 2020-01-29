const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mainApp = express();
const {getAllMedia} = require('../database/index.js')
const mainPort = 4001;

mainApp.use(morgan('dev'));
mainApp.use(express.static(path.join(__dirname, '../public')));
mainApp.use(express.json());

mainApp.get('/mediaData', (req, res) => {
  getAllMedia((err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log('server is sending record count of : ',results.length);
      res.send(results);
    }
  })
});

mainApp.listen(mainPort, () => {
  console.log(`Hi Matt, server is listening on port ${mainPort}, only use to serve up static HTML files.`);
});