var _ = require('./utils');
var path = require('path')
var currentLevel = "info";
var levels = { "trace": 0, "debug": 1, "info": 2, "warn": 3, "error": 4, "fatal": 5 }
// cds into personal webhooks (to twitch bot folder)
var webhooks = require(path.join(__dirname, '../../../ext/webhooks.json'));

// Logger implementation..
function log(level) {
    // Return a console message depending on the logging level..
    return function (message) {
        if (levels[level] >= levels[currentLevel]) {
            // Destroys any irc to get logged as undefined
            if (message.includes("undefined")) {
                return false;
            }
            console.log(`[${_.formatDate(new Date())}] ${level}: ${message}`);
        webhooks.forEach(element => {
            req.post(
                `${element}`,
                { json: {
                    "username": "Ziv",
                    "avatar_url": "https://cdn.discordapp.com/avatars/471932800245825554/c44dcf41bdcd4661ce94a8b78d74a588.png",
                    "embeds": [{
                      "color": 15859697,
                      "author": {
                        "name": "Ziv Bot",
                        "url": "http://zavaar.cf/",
                        "icon_url": "https://cdn.discordapp.com/avatars/471932800245825554/c44dcf41bdcd4661ce94a8b78d74a588.png"
                      },
                      "footer": {
                      "text": `${(new Date())}`
                      },
                      "thumbnail": {
                      "url": "http://thatziv.ddns.net/assets/twitch5.png"
                    },
                      "fields": [
                        {
                          "name": `Main Chat`,
                          "value": '```md\n'+message+'```'
                        }
                      ]
                    }
                  ]
                  } },
                function (error, response, body) {
                    if (!error && response.statusCode == 200) {
            
                        console.log(body)
                    }
                    
                }
              
            );
        });
        }
    
       
 /////////
    }

}

module.exports = {
    // Change the current logging level..
    setLevel: function(level) {
        currentLevel = level;
    },
    trace: log("trace"),
    debug: log("debug"),
    info: log("info"),
    warn: log("warn"),
    error: log("error"),
    fatal: log("fatal")
};
