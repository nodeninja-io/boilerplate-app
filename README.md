# NodeNinja.io 
Node.js Boilerplate Application for Hackathons

The NodeNinja Boilerplate Application was developed to help developers jumpstart the application development process. 
By using NodeNinja a developer could literally save hundreds of hours of programming by re-using the existing code in this project.

Core Technology Stack
---------------------

+ Node.js
+ MongoDB
+ Jade
+ Express

A live demo site can be found at http://www.NodeNinja.io


Features
--------

- Gulp.js Build System
- Jade Templates
- Bootstrap 3.x UI
- MVC Project structure
- Strong Authentication
 + Local Auth (Email, Password with optional Email verification
 + OAuth 1.0 Auth via Twitter
 + OAuth 2.0 Auth via Facebook, Github and Google
 + Enhanced Two-Factor Auth 
- Account Management Module
- API Examples
- Boilerplate page templates (Terms of Use, FAQs, Privacy Policy, About Us) 
- Plus much more
 
Installation
------------

Pre-requisites

+ Install Node.js (http://nodejs.org)
+ Install MongoDB (http://www.mongodb.org/downloads) - However I prefer to use MongoLab (https://mongolab.com). 
+ Install a Command Line Tool (some NPM modules must be compiled)
 - **Mac OS X**: [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) (or **OS X 10.9 Mavericks**: `xcode-select --install`)
 - **Windows**: [Visual Studio](http://www.visualstudio.com/downloads/download-visual-studio-vs#d-express-windows-8)
+ Install Python 
 - **Mac OS x**: https://www.python.org/downloads/mac-osx/
 - **Windows**: (http://www.python.org/getit/windows/)

NodeNinja Project

+ Install global dependencies
 - npm install -g nodemon gulp mocha

+ Clone the repo (and fetch only the latest commits)
 - git clone --depth=1 git@github.com:nodeninja-io/boilerplate-app.git (**or simply download the zip file and extract the    project into your application directory**)
 - cd boilerplate-app (**or whatever you named your application directory**)

+ Install node-gyp command line tool
 - Install node-gyp: npm install -g node-gyp

+ Install local dependencies
 - npm install
 - npm -g install bower

+ Start everything up with Gulp (builds the assets and starts the app with nodemon)
 - gulp




