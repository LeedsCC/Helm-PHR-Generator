'use strict';
const Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');

const functions = require('./functions');
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
      yosay(`Welcome to ${chalk.green('PulseTile-Core')} generator!`)
    );

    if (isSkipDialog) {
        return true;
    } else {
        const prompts = [
            {
                type: 'confirm',
                name: 'someAnswer',
                message: `Would you like to clone ${chalk.green('PulseTile-Core')} from GitHub?`,
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

      commonFunctions.cloneProject(
        this,
        'PulseTile-Core',
        'develop',
        'https://github.com/PulseTile/PulseTile-React-Core',
        'PulseTile-React-Core'
      );

      functions.updateNpmModules(this);
      functions.createPluginsDirectory();
      functions.createFeaturesDirectory();

      console.log(yosay(`Congradulations!!! ${chalk.green('PulseTile-Core')} was installed successfully!!!`));

    } catch (err) {
      console.log(yosay(`${chalk.green('ERROR: ')} ${err}`));
      console.log(yosay(`Please, remove project directory and repeat installing.`));
    }
  }
};
