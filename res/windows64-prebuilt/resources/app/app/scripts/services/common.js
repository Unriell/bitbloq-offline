'use strict';

/**
 * @ngdoc service
 * @name bitbloqOffline.common
 * @description
 * # common
 * Service in the bitbloqOffline.
 */
angular.module('bitbloqOffline')
  .service('common', function($http, $filter, $rootScope, $translate) {

    var exports = {};

    var fs = require('fs');
    exports.webPath = process.mainModule.filename.substring(0, process.mainModule.filename.lastIndexOf('/'));

    exports.appPath = exports.webPath.substring(0, exports.webPath.lastIndexOf("/"));
    exports.resourcesPath = process.resourcesPath;
    exports.bloqsSchemas = JSON.parse(fs.readFileSync(exports.resourcesPath + '/app/bower_components/bloqs/dist/bloqsmap.json', 'utf8'));
    exports.hardware = JSON.parse(fs.readFileSync(exports.resourcesPath + '/app/app/res/hw.json', 'utf8'));
    console.log(exports.bloqsSchemas);
    exports.translate = $filter('translate');
    exports.translateTo = function(lang) {
      console.log('Translating to:', lang)

      $translate.use(lang);
    };
    return exports;

  });