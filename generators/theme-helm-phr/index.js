'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const process = require('process');
var fs = require('fs');
var mkdirp = require('mkdirp');
var rmdir = require('rmdir');

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
      yosay(`Welcome to the ${chalk.red('generator-plugin-helm-phr-theme')} generator!`)
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
        'HelmPHR-theme plugin',
        'develop-merge',
        'https://github.com/PulseTile-Plugins/Plugin-Helm-PHR-Theme',
        'Plugin-Helm-PHR-Theme'
      );

      functions.relocateContent();
      functions.updateThemeFeatures(this);
      functions.importThemeStyles();
      functions.addThemeStyles();
      functions.changeLogoImages(this);
      functions.changeBanners(this);
      functions.changePrevImages(this);
      functions.changeMainSpinner(this);
      functions.removeThemeDirectory();

      console.log(
        yosay(
          `Congradulations!!! ${chalk.green(
            'HelpPHR-theme plugin'
          )} was added successfully!!!`
        )
      );
      console.log(
        yosay(`If you want to build the project run: ${chalk.green('npm run build')}`)
      );
    } catch (err) {
      console.log(yosay(`${chalk.green('ERROR: ')} ${err}`));
      console.log(
        yosay(
          `Please, remove plugin directory ${chalk.green(
            'Plugin-Helm-PHR-Theme'
          )} and repeat installing.`
        )
      );
    }
  }
};
