'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

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
      yosay(`Welcome to the ${chalk.red('Silver-Plugin-TopThreeThings')} generator!`)
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
      commonFunctions.goToPluginsDirectory();
      commonFunctions.cloneProject(
        this,
        'TopThreeThings plugin',
        'master',
        'https://github.com/PulseTile-Plugins/Silver-Plugin-TopThreeThings',
        'TopThreeThings'
      );
      console.log(yosay(`Congradulations!!! ${chalk.green('TopThreeThings plugin')} was added successfully!!!`));
    } catch (err) {
      console.log(yosay(`${chalk.green('ERROR: ')} ${err}`));
      console.log(yosay(`Please, remove plugin directory ${chalk.green('TopThreeThings')} and repeat installing.`));
    }
  }
};
