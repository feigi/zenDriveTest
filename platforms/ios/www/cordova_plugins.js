cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "com-zendrive-phonegap-sdk.ZendriveCordovaPlugin",
    "file": "plugins/com-zendrive-phonegap-sdk/www/zendrive.js",
    "pluginId": "com-zendrive-phonegap-sdk",
    "clobbers": [
      "Zendrive"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "com-zendrive-phonegap-sdk": "2.3.3",
  "cordova-plugin-whitelist": "1.3.3"
};
// BOTTOM OF METADATA
});