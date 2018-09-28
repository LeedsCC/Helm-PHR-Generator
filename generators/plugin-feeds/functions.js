const chalk = require('chalk');
const yosay = require('yosay');
const process = require('process');
const fs = require('fs');
const fsExtra = require('fs-extra');
const rimraf = require('rimraf');

const pluginsInfo = require('../../common/pluginsInfo');
const commonFunctions = require('../../common/functions');

module.exports = {

  /**
   * This function replaces files from __replace__/ directory to the required places in the Core
   *
   * @return {boolean}
   */
  replacePluginFiles: function() {
    console.log(yosay(`${chalk.yellow('Step 2:')} Replacing Feeds-plugin files...`));
    const srcPath = '../../..';
    process.chdir(srcPath);
    fsExtra.move(
      'components/theme/plugins/Feeds/__replace__/non-core-utils.js',
      'components/pages/PatientsSummary/non-core-utils.js',
      {
        overwrite: true
      },
      function(err) {
        if (err) throw err;
      }
    );

    fsExtra.move(
      'components/theme/plugins/Feeds/__replace__/FeedsSelectors.js',
      'components/pages/PatientsSummary/header/FeedsSelectors.js',
      {
        overwrite: true
      },
      function(err) {
        if (err) throw err;
      }
    );

    fsExtra.move(
      'components/theme/plugins/Feeds/__replace__/FeedsPanel.js',
      'components/pages/PatientsSummary/FeedsPanel.js',
      {
        overwrite: true
      },
      function(err) {
        if (err) throw err;
      }
    );

    fsExtra.move(
      'components/theme/plugins/Feeds/__replace__/FeedsEmptyPanel.js',
      'components/pages/UserProfile/panels/FeedsEmptyPanel.js',
      {
        overwrite: true
      },
      function(err) {
        if (err) throw err;
      }
    );

    setTimeout(function () {
        rimraf('components/theme/plugins/Feeds/__replace__', function (err) {
            if (err) throw err;
        });
    }, 5000);

    return true;
  },
};
