const chalk = require('chalk');
const yosay = require('yosay');
const process = require('process');
const fsExtra = require('fs-extra');
const fs = require('fs');

const commonfunctions = require('../../common/functions');

const extraPluginsInfo = require('../../common/extraPluginsInfo');
const topHeaderButtonsInfo = require('../../common/topHeaderButtonsInfo');

module.exports = {



  updateConfigFiles: function(el) {
    console.log(yosay(`${chalk.yellow('Step 3:')} Config files updating...`));

    const featuresList = commonfunctions.getFeaturesInformation();

    var extraPluginsArray = [];
    var topHeaderButtonsArray = [];
    featuresList.forEach(function(item) {
      if (extraPluginsInfo[item]) {
        extraPluginsArray.push(extraPluginsInfo[item].extraPlugins);
      }
      if (topHeaderButtonsInfo[item]) {
        topHeaderButtonsArray.push(topHeaderButtonsInfo[item].topHeaderButtons);
      }
      else {
        console.log('WARNING!');
        console.log(
          'Information about features ' + item + ' is absent in file extraPlaginsInfo.js or in file topHeaderButtonsInfo'
        );
      }
    });

    const configDirectoryPath = '../../components';
    process.chdir(configDirectoryPath);

    el.fs.copyTpl(el.templatePath('extraPlugins.txt'), 'ExtraPlugins.js', {
      features: extraPluginsArray
    });

    el.fs.copyTpl(el.templatePath('topHeaderButtons.txt'), 'TopHeaderButtons.js', {
      features: topHeaderButtonsArray
    });

    return true;
  },


};
