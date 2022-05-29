# Aviation Frequency transmissor map somulator 

This is a web-based tool that can simulate the coverage of receivers to see if there are any blind spots when deploying antennas that capture signals on frequencies emitted by aircraft transponders.

The application was developed using Nodejs (backend) to develop the API containing all the necessary endpoints to list, add and remove receivers. It also uses ReactJs (frontend) to display the receivers in the map with their respective coverage. The UI is also used to present an admin dashboard where the user can manage the receivers. It also uses Google Maps API to locate the signals.

In order to run the application locally, it is necessary to have all libraries indicated in the package.json file.

Make sure you have NodeJs Version ^16.x installed and NPM. 
The application uses yarn as the package manager, so make sure it is installed in your machine.
Insert your own Google Maps API, Mongo DB Username, and password. Set these variables in the .env file

To run the application in the development environment, use "yarn dev."

Note: This application has a live version deployed in Heroku. To access it use this link - https://aviation-simulator-frontend.herokuapp.com/ 