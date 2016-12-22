var settings = require('../settings');
module.exports = {
    options: {
        livereload: true,
    },
    html:{
        files: settings.html.workingdirectory,
        tasks: ['watchhtml'],  
        options: {
            spawn: false,
        }

    },
    css: {
        files: settings.css.workingdirectory,
        tasks: ['watchcss'],  
        options: {
            spawn: false,
        }
    },
    js: {
        files: settings.js.workingdirectory,
        tasks: ['watchjs'],   
        options: {
            spawn: false,
        }
    }

}
