const yosay = require('yosay');
const chalk = require('chalk');
const process = require('process');
const mkdirp = require('mkdirp');
const fs = require('fs');
const rimraf = require('rimraf');
const fsExtra = require('fs-extra');

const pluginsInfo = require('./plugins/pluginsInfo');
const recordsOfTableInfo = require('./plugins/recordsOfTable/pluginsInfo');
const extraPluginsInfo = require('./components/extraPluginsInfo');
const topHeaderButtonsInfo = require('./components/topHeaderButtonsInfo');

/**
 * This module includes common functions, or functions which can be used in different subgenerators
 *
 */
module.exports = {

  /**
   * This function redirects generator to the non-core plugins storage directory
   */
  goToPluginsDirectory: function() {
    const themeDirectoryPath = 'PulseTile-React-Core/src/components/theme/plugins';
    process.chdir(themeDirectoryPath);
    return true;
  },

  /**
   * This function redirects generator to the theme features storage directory
   */
  goToFeaturesDirectory: function() {
    const themeDirectoryPath = 'PulseTile-React-Core/src/components/theme/components/features';
    process.chdir(themeDirectoryPath);
    return true;
  },

  /**
   *
    * @return {boolean}
   */
  goToComponentsDirectory: function() {
    const themeDirectoryPath = '../../components/features';
    process.chdir(themeDirectoryPath);
    return true;
  },

  /**
   * This function clones Core project from GitHub
   *
   * @param el
   * @param {string} projectName
   * @param {string} branchName
   * @param {string} repositoryName
   * @param {string} pluginName
   * @return {boolean}
   */
  cloneProject: function(el, projectName, branchName, repositoryName, pluginName) {
    console.log(
      yosay(
        `${chalk.yellow('Step 1:')} Now we are clonning ${chalk.green(
          projectName
        )} from GitHub...`
      )
    );
    el.spawnCommandSync('git', ['clone', '-b', branchName, repositoryName, pluginName]);
    return true;
  },

  /**
   * This function checks content of plugins directory and returns plugins list
   *
   * @return {array}
   */
  getPluginsInformation: function() {
    const pluginsList = [];
    fs.readdirSync(process.cwd()).forEach(function(file) {
      pluginsList.push(file);
    });
    return pluginsList;
  },

  /**
   * This function checks content of features directory and returns features list
   *
   * @return {array}
   */
  getFeaturesInformation: function(dirName = null) {
    const featuresList = [];
    let dir = dirName ? dirName : process.cwd();
    fs.readdirSync(dir).forEach(function(file) {
      featuresList.push(file);
    });
    return featuresList;
  },

  /**
   * This function updates config files
   *
   * @return {boolean}
   */
  updateConfigFiles: function(el, step) {
    console.log(yosay(`${chalk.yellow('Step ' + step + ':')} Config files updating...`));

    const pluginsList = this.getPluginsInformation();

    var clientUrlsArray = [];
    var pluginsArray = [];
    var synopsisRequestsArray = [];
    var themeSelectorsArray = [];
    pluginsList.forEach(function(item) {
      if (pluginsInfo[item]) {
        clientUrlsArray.push(pluginsInfo[item].clientsUrl);
        pluginsArray.push(pluginsInfo[item].plugins);
        synopsisRequestsArray.push(pluginsInfo[item].synopsisRequests);
        themeSelectorsArray.push(pluginsInfo[item].themeSelectors);
      } else {
        console.log('WARNING!');
        console.log(
          'Information about plugin ' + item + ' is absent in file pluginInfo.js'
        );
      }
    });

    const configDirectoryPath = '../config';
    process.chdir(configDirectoryPath);

    el.fs.copyTpl(el.templatePath('plugins/clientUrls.txt'), 'clientUrls.js', {
      plugins: clientUrlsArray
    });

    el.fs.copyTpl(el.templatePath('plugins/plugins.txt'), 'plugins.js', {
      plugins: pluginsArray
    });

    el.fs.copyTpl(el.templatePath('plugins/synopsisRequests.txt'), 'synopsisRequests.js', {
      plugins: synopsisRequestsArray
    });

    el.fs.copyTpl(el.templatePath('plugins/themeSelectors.txt'), 'themeSelectors.js', {
      plugins: themeSelectorsArray
    });

    return true;
  },

  /**
   *
   */
  updateRecordsOfTable: function (el, step) {
    console.log(yosay(`${chalk.yellow('Step ' + step + ':')} Config files updating for RecordsOfTable...`));

    const pluginsDirectoryPath = '../plugins';
    process.chdir(pluginsDirectoryPath);

    const pluginsList = this.getPluginsInformation();

    const recordsOfTableDirectoryPath = '../config/recordsOfTable';
    process.chdir(recordsOfTableDirectoryPath);

    var recordsOfTableArray = [];
    var recordsOfTableDetailsArray = [];
    var recordsOfTableFunctionsArray = [];
    var recordsOfTablePopoverArray = [];
    pluginsList.forEach(function(item) {
      if (recordsOfTableInfo[item]) {
        recordsOfTableArray.push(recordsOfTableInfo[item].recordsOfTable);
        recordsOfTableDetailsArray.push(recordsOfTableInfo[item].recordsOfTableDetails);
        recordsOfTableFunctionsArray.push(recordsOfTableInfo[item].recordsOfTableFunctions);
        recordsOfTablePopoverArray.push(recordsOfTableInfo[item].recordsOfTablePopover);
      }
    });

    el.fs.copyTpl(el.templatePath('plugins/recordsOfTable/recordsOfTable.txt'), 'recordsOfTable.js', {
      plugins: recordsOfTableArray
    });

    el.fs.copyTpl(el.templatePath('plugins/recordsOfTable/recordsOfTableDetails.txt'), 'recordsOfTableDetails.js', {
      plugins: recordsOfTableDetailsArray
    });

    el.fs.copyTpl(el.templatePath('plugins/recordsOfTable/recordsOfTableFunctions.txt'), 'recordsOfTableFunctions.js', {
      plugins: recordsOfTableFunctionsArray
    });

    el.fs.copyTpl(el.templatePath('plugins/recordsOfTable/recordsOfTablePopover.txt'), 'recordsOfTablePopover.js', {
      plugins: recordsOfTablePopoverArray
    });

  },

  /**
   * This function removes Theme directory
   *
   * @return {boolean}
   */
  removePluginDirectory: function(dirName) {
    console.log(yosay(`${chalk.yellow('Step 3:')} Removing plugin directory...`));
    rimraf(dirName, function(err) {
      if (err) throw err;
    });
    return true;
  },

  /**
   * This function adds importing of theme to main CSS file
   *
   * @return {boolean}
   */
  removeExcessFiles: function(dirName, excessFiles) {
    console.log(
      yosay(`${chalk.yellow('Step 2:')} Removing excess files and directories...`)
    );
    process.chdir(dirName);
    excessFiles.forEach(function(item) {
      rimraf(item, function(err) {
        if (err) throw err;
      });
    });
    return true;
  },

  /**
   *
   */
  extractPlugins: function(dirName) {
    console.log(yosay(`${chalk.yellow('Step 3:')} Extracting plugins directories...`));
    const pluginsList = this.getPluginsInformation();
    const srcPath = '../..';
    process.chdir(srcPath);
    pluginsList.forEach(function(item) {
      fsExtra.moveSync(dirName + item, 'plugins/' + item, {
        overwrite: true
      });
    });
    return true;
  },

  /**
   * This function updates features config files
   *
   * @return {boolean}
   */
  updateFeaturesConfigFiles: function(el) {
    console.log(yosay(`${chalk.yellow('Step 4:')} Features files updating...`));

    const featuresList = this.getFeaturesInformation();
    var extraPluginsArray = [];
    var topHeaderButtonsArray = [];
    featuresList.forEach(function(item) {
      if (extraPluginsInfo[item]) {
        extraPluginsArray.push(extraPluginsInfo[item].extraPlugins);
      }
      if (topHeaderButtonsInfo[item]) {
        topHeaderButtonsArray.push(topHeaderButtonsInfo[item].topHeaderButtons);
      } else {
        console.log('WARNING!');
        console.log('Information about features ' + item + ' is absent in file extraPlaginsInfo.js or in file topHeaderButtonsInfo');
      }
    });

    const configDirectoryPath = '../../components';
    process.chdir(configDirectoryPath);

    el.fs.copyTpl(el.templatePath('features/extraPlugins.txt'), 'ExtraPlugins.js', {
      features: extraPluginsArray
    });

    el.fs.copyTpl(el.templatePath('features/topHeaderButtons.txt'), 'TopHeaderButtons.js', {
      features: topHeaderButtonsArray
    });

    return true;
  },
};
