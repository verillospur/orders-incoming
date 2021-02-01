// 
//  config.js 
//  ~/config/ 
// 
//  created:    2021-02-01
// 
//  app-wide configuration 
// 
'use strict';

const config = () => {

    return {
      
        // log
        log: require('../log/config'), 
        
        // mongodb
        mongodb: require('../data/config'), 

        // // clients
        // clients: require('../clients/config'), 

    };
};

module.exports = config();
