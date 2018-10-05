const chalk = require('chalk');
const yosay = require('yosay');
const fs = require('fs');
const rimraf = require('rimraf');
const process = require('process');

module.exports = {

  /**
   * This function update components <ExtraPatientsSummarySelectors /> and <ExtraPatientsSummaryPanels />
   * which unite Feeds-plugin with Core
   *
   * @return {boolean}
   */
  updateComponents: function(el) {

    console.log(yosay(`${chalk.yellow('Step 2:')} Updating components for Feeds-plugin...`));

    const configDirectoryPath = '../components';
    process.chdir(configDirectoryPath);

    fs.copyFileSync(
      el.templatePath('ExtraPatientsSummarySelectors.txt'),
      'ExtraPatientsSummarySelectors.js'
    );

    fs.copyFileSync(
      el.templatePath('ExtraPatientsSummaryPanels.txt'),
      'ExtraPatientsSummaryPanels.js'
    );

    return true;
  },
};
