'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Players = new Module('players');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Players.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Players.routes(app, auth, database);

  Players.menus.add({
    title: 'Players',
    link: 'players page',
    menu: 'main'
  });
  
  Players.aggregateAsset('css', 'players.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Players.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Players.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Players.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Players;
});
