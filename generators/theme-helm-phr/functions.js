const chalk = require('chalk');
const yosay = require('yosay');
const process = require('process');
const fs = require('fs');
const fsExtra = require('fs-extra');
const rimraf = require('rimraf');

const pluginsConfig = require('./pluginsConfig');
const commonFunctions = require('../../common/functions');

module.exports = {
  /**
   * This function adds importing of theme to main CSS file
   *
   * @return {boolean}
   */
  relocateContent: function() {
    console.log(
      yosay(
        `${chalk.yellow('Step 2:')} Copying ${chalk.green('Images')} and ${chalk.green(
          'Styles'
        )} to required locations.`
      )
    );
    const srcPath = '../../..';
    process.chdir(srcPath);

    fsExtra.moveSync(
      'components/theme/plugins/Plugin-Helm-PHR-Theme/styles',
      'styles',
      {
        overwrite: true
      }
    );

    fsExtra.moveSync(
      'components/theme/plugins/Plugin-Helm-PHR-Theme/assets/images',
      'assets/images',
      { overwrite: true },
      function(err) {
        if (err) throw err;
      }
    );

    fsExtra.moveSync(
      'components/theme/plugins/Plugin-Helm-PHR-Theme/index.html',
      './index.html',
      { overwrite: true },
      function(err) {
      if (err) throw err;
    });

    return true;
  },

  /**
   * This function adds importing of theme to main CSS file
   *
   * @return {boolean}
   */
  importThemeStyles: function() {
    console.log(yosay(`${chalk.yellow('Step 3:')} Including Helm-PHR CSS files...`));
    const newRow = "\n\n\n@import 'themes/index';";
    fs.appendFileSync('styles/main.scss', newRow, function(err) {
      if (err) throw err;
    });
    fs.appendFileSync('styles/core.scss', newRow, function(err) {
      if (err) throw err;
    });
    return true;
  },

  addThemeStyles: function() {
    console.log(yosay(`${chalk.yellow('Step 4:')} Including Helm-PHR CSS files...`));
    const newRow = "\n\n\nimport '../styles/main.scss';";
    fs.appendFileSync('config/styles.js', newRow, function (err) {
      if (err) throw err;
    });
    return true;
  },


  /**
   * This function update logo images urls
   *
   * @param el
   * @return {boolean}
   */
  changeLogoImages: function(el) {

    console.log(yosay(`${chalk.yellow('Step 6:')} Changing images...`));
    fs.copyFileSync(
      el.templatePath('mainLogo.txt'),
      'components/presentational/MainLogo/LogoImage.js'
    );
    fs.copyFileSync(
      el.templatePath('headerImage.txt'),
      'components/containers/App/HeaderImage.js'
    );
    return true;
  },

  /**
   * This function update banners images urls
   *
   * @param el
   * @return {boolean}
   */
  changeBanners: function(el) {
    for (var i = 0, n = pluginsConfig.length; i < n; i++) {
      var item = pluginsConfig[i];
      if (!fs.exists('components/pages/' + item.name)) {
        el.fs.copyTpl(el.templatePath('bannersImage.txt'), item.componentUrl, {
          bannerSrc: item.banner,
          prevSrc: item.prev,
          prevImport: item.prevImport
        });
      }
    }
    return true;
  },

  /**
   * This function update preview images urls
   *
   * @param el
   * @return {boolean}
   */
  changePrevImages: function(el) {
    fs.copyFileSync(
      el.templatePath('prevImage.txt'),
      'components/pages/PatientsSummary/ImageSources.js'
    );
    return true;
  },

  /**
   * This function updates context for all themes features
   *
   * @param el
   */
  updateThemeFeatures: function(el) {
    const featuresList = commonFunctions.getFeaturesInformation('components/theme/components/features');
    for (var i = 0, n = featuresList.length; i < n; i++) {
      var feature = featuresList[i];
      fs.copyFileSync(
        el.templatePath('content/' + feature + '.txt'),
        'components/theme/components/features/' + feature + '/content.js'
      );
    }
  },

  /**
   * This function removes Theme directory
   *
   * @return {boolean}
   */
  removeThemeDirectory: function() {
    console.log(yosay(`${chalk.yellow('Step 7:')} Removing theme directory...`));
    rimraf('components/theme/plugins/Plugin-Helm-PHR-Theme', function(err) {
      if (err) throw err;
    });
    return true;
  }
};
