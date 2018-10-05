'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');



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

          commonFunctions.goToFeaturesDirectory();

          commonFunctions.cloneProject(
              this,
              'Terms and Conditions plugin',
              'master',
              'https://github.com/BogdanScherban/Plugin-T-CsModal-HelmPHR',
              'TermsAndConditions'
          );

        setTimeout(function() {
          const excessFiles = ['LICENSE', '.git', 'README.md'];
          commonFunctions.removeExcessFiles('TermsAndConditions', excessFiles);
        }, 10000);



      } catch (err) {
          console.log(yosay(`${chalk.green('ERROR: ')} ${err}`));
          console.error(`ERROR: ${err}`);
      }
  }
};
