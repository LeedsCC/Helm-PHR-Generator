# General infornation

The Helm PHR Generator comprises of three key Ripple Foundation supported components namely, PulseTile, QEWD.js and EtherCIS. Each component is developed independently and therefore has its own development and build process. This Generator takes the PulseTile component (React.js version) and gets it ready for deployment within the Helm PHR environment. 

Any version of PulseTile-React project, such as this Helm PHR version, consists of two main parts: Core framework and Non-Core plugins, including themes (i.e. styles and images).

This generator allows us to change / add / remove select plugins and automatically create the PulseTile Showcase build without changing the PulseTile React.js core framework. 

For this automatic creation of the build, a generator based on Yeoman technology is used. 
This tool gives the possibility to create new builds from modules, that are located in the separate GitHub repositories. 

To learn more about Yeoman, please see http://yeoman.io/


# The components used in the Helm PHR Generator

The current version of Helm PHR Generator includes following sub-generators:

1) Core sub-generator;
2) Non-core plugins sub-generators:
    * for TopThreeThings plugin;
    * for Vaccinations plugin;
    * for Feeds plugin;
3) Non-core features sub-generators:
    * for Terms and Conditions feature plugin;
4) Theme Helm PHR sub-generator;
5) Sub-generator for configuration files updating.

You can see how it works on the scheme below:

![alt text](https://github.com/LeedsCC/Helm-PHR-Generator/blob/kuvakina-patch-1/Helm-gen.png)

# How it works

We have separate GitHub repositories with Core (all core plugins and features), Non-Core plugins and features, and Theme that are then imported.

When the Helm PHR version is built, Generator makes following steps automatically:

1) Clone latest version of Core from GitHub and install all required modules and libraries: 
 _$ yo helm-phr:core_

2) Clone all Non-Core plugins from GitHub and add it to Non-Core component storage:  
_$ yo helm-phr:plugin-top-three-things_  
_$ yo helm-phr:plugin-vaccinations_  
_$ yo helm-phr:plugin-feeds_  

3) Clone other features from GitHub and add it to the Non-Core component storage:  
_$ yo helm-phr:feature-user-tour_  

4) Clone Helm-PHR-theme from GitHub and add it into your build:  
_$ yo helm-phr:theme-helm-phr --force_  

5) Update the config files which unite Core with Non-Core component storage:  
_$ yo helm-phr:update --theme=helm --force_  

6) Create the build:  
_$ npm run build_  
 
After these steps have taken place, the built Helm PHR version is ready for use. 

**Please see more detailed command line instructions below.** 

Before installing the Generator, you will need the following:
* Node.js 6 or higher
* npm 3 or higher (which comes bundled with Node)
* Git

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
    $ yo helm-phr:plugin-top-three-things 
    $ yo helm-phr:plugin-vaccinations 
    $ yo helm-phr:plugin-feeds 
    $ yo helm-phr:feature-user-tour
    $ yo helm-phr:theme-helm-phr --force
    $ yo helm-phr:update --theme=helm --force
```
Attribute **--theme** is used to set the name of required theme.

Attribute **--force** is used for overwriting config files by default.

Attribute **--skip** is used for skipping user dialog. You can use this attribute with each sub-generator.
It is necessary if you want to provide automatic work of Generator (in Docker, for example)

When you build will be created, go to project directory and create the build:
```
    $ cd PulseTile-React-Core
    $ npm run build
```

Your build will be located in two places:
- as zip-archive in **projectDirectory/build/**
- as set of files in **projectDirectory/dist/**
