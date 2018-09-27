# General infornation

This generator is used for automatic creation build for HelmPHR-version. 

It based on **Yeoman** technology. This tool gives possibility to create new project from modules, which are located in the separate GitHub repositories. More information about Yeoman you can found here: http://yeoman.io/

If you want to install HelmPHR-version automatically, you should read **"Installing"** below.

# Content

Current version of **Helm-PHR generator** includes four sub-generators:
1) **Core** sub-generator (_yo helm-phr:core_);
2) Silver plugin **TopThreeThings** sub-generator (_yo helm-phr:plugin-top-three-things_);
3) Silver plugin **Vaccinations** sub-generator (_yo helm-phr:plugin-vaccinations_);
4) Silver plugin **Feeds** sub-generator (_yo helm-phr:plugin-feeds_);
5) Plugin **HelmPHR-theme** sub-generator (_yo helm-phr:plugin-helm-phr_);
6) Plugin **UserTour** sub-generator (_yo helm-phr:plugin-user-tour_);
7) Plugin **TermsAndConsition** sub-generator (_yo helm-phr:plugin-terms-and-conditions_);
8) Sub-generator for configuration files updating (_yo helm-phr:update_);

# Core

This sub-generator does the following automatically:
1) Clone PulseTile-Core version from GitHub;
2) Install all required Node-modules;
3) Create the directory for non-core plugins.
 
If any errors occur during generator work you should remove project directory and repeat generator command.

# Silver plugin TopThreeThings

This sub-generator clones silver TopThreeThings plugin from GitHub to **plugins/** directory in the project;
 
If any errors occur during generator work you should remove **TopThreeThings/** directory and repeat generator command.

# Silver plugin Vaccinations

This sub-generator clones silver Vaccinations plugin from GitHub to **plugins/** directory in the project;
 
If any errors occur during generator work you should remove **Vaccinations/** directory and repeat generator command.

# Silver plugin Feeds

This sub-generator does the following automatically:
1) Clone silver Vaccinations plugin from GitHub to **plugins/** directory in the project;
2) Replace files from **replace/** directory to the required paths in the Core;

If any errors occur during generator work you should remove **Feeds/** directory and repeat generator command.

# Plugin for HelmPHR-theme

This sub-generator does the following automatically:
1) Clone silver HelmPHR-theme plugin from GitHub to **plugins/** directory in the project;
2) Relocate **images/** directory to **asset/images/**;
3) Relocate **theme/** directory to **styles/theme/**;
4) Change theme from Main to HelmPHR;
5) Update links for images.
 
If any errors occur during generator work you should remove project directory and repeat generator command.

# Plugin UserTour

This sub-generator does the following automatically:
1) Clone UserTour plugin from GitHub to **plugins/** directory in the project;
2) Overwrite **UserTour/** directory in **src/components/containers**;

If any errors occur during generator work you should remove project directory and repeat generator command.

# Plugin TermsAndConditions

This sub-generator does the following automatically:
1) Clone UserTour plugin from GitHub to **plugins/** directory in the project;
2) Overwrite **TermsAndConditions/** directory in **src/components/containers/**;

# Updating

This sub-generator updates all configuration files, located in **src/components/theme/config/** :
- clientUrls.js;
- plugins.js;
- synopsisRequests.js;
- themeSelectors.js;

These files provide relations between Core of project and new plugins.

If any errors occur during generator work you should repeat generator command.

# Environment

Before installing the Generator, you will need the following:
- Node.js 6 or higher
- npm 3 or higher (which comes bundled with Node)
- Git

You can check current version by:
```
    $ node --version
    $ npm --version
    $ git --version
```

# Installing

Install Yeoman tool at you local machine if it is absent there:
```
    $ npm install -g yo
    $ npm install -g generator-helm-phr
```

Go to the directory, where you will create your build, for example:
```
    $ cd /var/www/html/myDirectoryName/
```

Use Yeoman-generator to create your build automatically:
```
    $ yo helm-phr:core
    $ yo helm-phr:plugin-top-three-things --force
    $ yo helm-phr:plugin-vaccinations --force
    $ yo helm-phr:plugin-feeds --force
    $ yo helm-phr:plugin-helm-phr --force
    $ yo helm-phr:plugin-user-tour
    $ yo helm-phr:plugin-terms-and-conditions
    $ yo helm-phr:update
```

Attribute **--force** is used for overwriting config files by default.

When you build will be created, go to project directory and create the build:
```
    $ cd PulseTile-React-Core
    $ npm run build
```

Your build will be located in two places:
- as zip-archive in **projectDirectory/build/**
- as set of files in **projectDirectory/dist/**