'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const process = require('process');
const fs = require('fs');

const commonFunctions = require('../../common/functions');


var variable;
module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
    this.option('theme', {
        name: 'Name'
    });
    const test = this.options.theme;
    variable = test;
  }

    prompting() {
        this.log(
            yosay(`Welcome to the Config files updating!!!`)
        );

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

    writing() {
        try {
            console.log(variable);
            commonFunctions.goToPluginsDirectory();
            commonFunctions.updateConfigFiles(this, 2);
            commonFunctions.updateRecordsOfTable(this, 3);
            commonFunctions.goToComponentsDirectory();
            commonFunctions.updateFeaturesConfigFiles(this);



                fs.copyFileSync(
                    this.templatePath('theme/' + variable + '.txt'),
                    '../../../themes.config.js'
                );



        } catch (err) {
            console.log(yosay(`${chalk.green('ERROR: ')} ${err}`));
            console.error(`ERROR: ${err}`);
        }
    }
};

