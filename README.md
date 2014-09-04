ReactJS Drag and Drop test.
=============

Approach: Use React Synthetic events from outside of a component.
A component can register to specific events on "componentDidMount" lifecycle method.

Pros:
- compose Synthetic Events with other event-systems like BaconJS.
- make a comparison to the approach to integrage window-events into React Components


### Install
Download this repository to your local project folder and run
``` npm install ``` from the folder where the package.json is located.


### System Requirements

install [node.js](http://nodejs.org/download/) and [git](http://git-scm.com/downloads)

after node.js is installed, run these commands

``` npm install webpack -g ```

``` npm install webpack-dev-server -g ```

### Dev-Server
run ``` npm run devserver ``` from your project folder -> this will start a server at [http://localhost:9500/](http://localhost:9500/)

### Build
simply run ``` webpack ``` or ``` webpack -watch ``` from your project folder to build an uglifyed bundle.










