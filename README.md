# Itemis Sales Tax

I have done the question#1 from the pdf document provided to on 11th Jan 23. I am submitting today 17th Jan 23. Of the tasks asked to 
do in the question, I am new to the test driven development. Nevertheless I have tried to learn it in the short time and tried to perform
it. The test cases I have written are quite basic but there is a big learning curve for me in this. 

I will explain in details the approach I have taken to build the application. 

## Project Setup and Structure

I always divide the whole repository into 3 chunks or branches for every project I start working on. I always start with the 'main' or 'master' branch then after setting up the application, I divide it into 'production' and 'development' branches. 
All the changes/fixes/new features I add, I do everything in the development branch. And then I push all the changes to development branch, 
later when I have to host and the quality is tested by the QA tester, I merge the developement branch into the production branch and host the website from the production branch. This way, all the works are seperated, independent and safe in case of accidents/problems. 

Another extra thing which I do when I big projects is I break down all the requirements/features into issues and have them added in the Gitlab/Github Issue board and assign the responsible person to it, so that incase there are many developers working on the same project, there will be more branches and then to start working parallely they can just merge request from the issues and work in their repository independently.

## Backend Server / Test Data

Usually when I am building something, I read some data from the database and save a copy in the project directory and run the json file locally. It works exactly like a server, but for your convenience I have stored it in the json files in a 'backend' folder stored in the root directory of the project and read from there. 

## Development server / Frontend

I have created the frontend app section into three sections here as well. 
1. Services (for common operatons)
2. Pages (for the page view)
3. Components (for the common modules to appear on the pages)

## Build

To run the project/application in your browser, open the terminal within the project directory and run: 'docker build .'
Alternatively, if you don't want to run via Docker then you can run seperatly also in the same terminal by typing, 'npm install' to install the dependencies and then type 'npm start' to start the server at https:localhost:4200/

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


