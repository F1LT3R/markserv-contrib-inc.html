const path = require('path');
const fs = require('fs');

module.exports = (plugin, markserv) => {
  return (includePath) => {
    return new Promise(resolve => {
      resolve();
    });
  };
};
