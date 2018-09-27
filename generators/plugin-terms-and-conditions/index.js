'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const process = require('process');

const functions = require('./functions');
const commonFunctions = require('../../common/functions');

module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay(`Welcome to the Terms and Conditions sub-generator!`)
    );

    const prompts = [
      {
        type: 'confirm',
        name: 'someAnswer',
        message: 'Would you like to enable this option?',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
      try {

          commonFunctions.goToPluginsDirectory();

          commonFunctions.cloneProject(
              this,
              'Terms and Conditions plugin',
              'master',
              'https://github.com/PulseTile-Plugins/Plugin-T-CsModal-HelmPHR',
              'TermsAndConditions'
          );

          setTimeout(function () {
              functions.replacePluginFiles();
          }, 10000);

          setTimeout(function () {
              commonFunctions.removePluginDirectory('components/theme/plugins/TermsAndConditions');
          }, 10000);

      } catch (err) {
          console.log(yosay(`${chalk.green('ERROR: ')} ${err}`));
          console.error(`ERROR: ${err}`);
      }
  }
};
