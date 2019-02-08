'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const process = require('process');
const fs = require('fs');

const commonFunctions = require('../../common/functions');

/**
 * This variable equals true/false depends on option --skip
 * (to skip dialog with user)
 */
var isSkipDialog;

/**
 * Theme name (--theme=helm-phr or theme=showcase)
 */
var theme;

module.exports = class extends Generator {

    constructor(args, opts) {
      super(args, opts);
      this.option('theme', {
          name: 'Name'
      });
      this.option('skip', {
        name: 'To skip dialog with user'
      });
      theme = this.options.theme;
      isSkipDialog = this.options.skip;
    }

    prompting() {
        this.log(
            yosay(`Welcome to the Config files updating!!!`)
        );

        if (isSkipDialog) {
            return true;
        } else {
            const prompts = [
                {
                    type: 'confirm',
                    name: 'someAnswer',
                    message: 'Do you want to update config files?',
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
            commonFunctions.updateConfigFiles(this, 2);
            commonFunctions.updateRecordsOfTable(this, 3);
            commonFunctions.goToComponentsDirectory();
            commonFunctions.updateFeaturesConfigFiles(this);
            fs.copyFileSync(
                this.templatePath('theme/' + theme + '.txt'),
                '../../../themes.config.js'
            );
        } catch (err) {
            console.log(yosay(`${chalk.green('ERROR: ')} ${err}`));
            console.error(`ERROR: ${err}`);
        }
    }
};

