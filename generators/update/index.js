'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const process = require('process');

const commonFunctions = require('../../common/functions');

module.exports = class extends Generator {
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
            commonFunctions.goToPluginsDirectory();
            commonFunctions.updateConfigFiles(this);
        } catch (err) {
            console.log(yosay(`${chalk.green('ERROR: ')} ${err}`));
            console.error(`ERROR: ${err}`);
        }
    }
};

