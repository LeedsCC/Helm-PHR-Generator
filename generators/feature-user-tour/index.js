'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const process = require('process');
const commonFunctions = require('../../common/functions');

/**
 * This variable equals true/false depends on option --skip
 * (to skip dialog with user)
 */
var isSkipDialog;

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
    this.option('skip', {
      name: 'To skip dialog with user'
    });
    isSkipDialog = this.options.skip;
  }

  prompting() {
    this.log(
      yosay(`Welcome to the ${chalk.red('generator-user-tour')} generator!`)
    );

    if (isSkipDialog) {
      return true;
    } else {
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
  }

  writing() {
      try {

          console.log(yosay(`${chalk.yellow('Step 0:')} Installing React-Joyride library...`));
          process.chdir('PulseTile-React-Core');
          this.spawnCommandSync('npm', ['i', 'react-joyride@next']);
          process.chdir('..');

          commonFunctions.goToFeaturesDirectory();
          commonFunctions.cloneProject(
              this,
              'UserTour plugin',
              'master',
              'https://github.com/PulseTile-Plugins/Plugin-React-UserTour',
              'UserTour'
          );
        setTimeout(function() {
          const excessFiles = ['LICENSE', '.git', 'README.md'];
          commonFunctions.removeExcessFiles('UserTour', excessFiles);
        }, 10000);

      } catch (err) {
          console.log(yosay(`${chalk.green('ERROR: ')} ${err}`));
          console.error(`ERROR: ${err}`);
      }
  }
};
