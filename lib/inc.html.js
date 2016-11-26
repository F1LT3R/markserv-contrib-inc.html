// const path = require('path');
// const fs = require('fs');

const Promise = require('bluebird');

module.exports = (plugin, markserv) => {
  markserv.trace(plugin);

  return (includePath, includeData, domNode) => {
    return new Promise((resolve, reject) => {
      // markserv.trace(includePath);
      // markserv.trace(includeData);
      // markserv.trace(domNode);

      markserv.readfile(includePath).then(html => {
        resolve(html);
      }).catch(err => {
        reject(err);
      });
    });
  };
};
