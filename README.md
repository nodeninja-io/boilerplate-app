# NodeNinja.io 
Node.js Boilerplate Application for Hackathons (MIT LICENSE)

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

NodeNinja Project Setup

+ Install global dependencies
 - npm install -g nodemon gulp mocha

+ Clone the repo (and fetch only the latest commits)
 - git clone --depth=1 git@github.com:nodeninja-io/boilerplate-app.git (**or simply download the zip file and extract the    project into your application directory**)
 - cd boilerplate-app (**or whatever you named your application directory**)

+ Install node-gyp command line tool
 - npm install -g node-gyp

+ Install bower browser package manager
 - npm -g install bower
 
+ Install local dependencies
 - npm config set python python2.7
 - npm install

+ If you decided to setup a local MongoDB instance skip this step, otherwise follow the steps below for setting up an account with MongoLab for your database
  - Go to the  [mongolab.com](https://mongolab.com) website
  - Click the sign-up button
  - Fill in the user information then click **create account**
  - From the dashboard click **Create New**
  - Next click **Single Node** and choose **Sandbox**
  - Type in your **database name**
  - Click **Create new MongoDB deployment**
  - Next create a database user and assign a username and password
  - Finally from your dashboard you should see a standard URI similiar to: (mongodb://dbuser:dbpassword@ds027465.mongolab.com:273999/dbname)
  - Copy the URI replacing dbuser and dbpassword with the username and password you assigned to your database
  - Finally, open config/config.js file in your NodeNinja application directory and find the following configuration parameter **config.mongodb.url**
  - Replace LOCALHOST with the modified URI that includes your username and password

+ Start everything up with Gulp (builds the assets and starts the app with nodemon)
 - gulp


Configuration
-------------

Note: Before you can start using the application you will need to update your configuration file (config/config.js).  This will need to be completed before you can authenticate using Twitter, Google, Facebook and/or Github.  You will need to create developer accounts with each and fill in your necessary key/secret. 

The config file also includes parameters for APIs that require authentication such as PayPal, Twillio, etc.

For email of account information, fill out the necessary SMTP parameters.





