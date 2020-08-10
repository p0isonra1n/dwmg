const displayTypes = require('./displayTypes.js');

class DWMG {

    manifest = {
        icons: [],
        shortcuts: []
    };

    static displayTypes = displayTypes;

    constructor(options = {}){
        this.manifest.name = options.name;
        this.manifest.short_name = options.short_name;
        this.manifest.start_url = options.start_url;
        this.manifest.display = options.display;
        this.manifest.background_color = options.background_color;
        this.manifest.description = options.description;
        this.manifest.theme_color = options.theme_color;
    }

    addIcon(src, sizes, type){
        let icon = {
            src: src,
            sizes: sizes
        };
        if(type != null) icon.type = type;
        this.manifest.icons.push(icon)
    }

    addShortcut(name, url, description){
        let shortcut = {
            name: name,
            url: url
        };
        if(description != null) shortcut.description = description;
        this.manifest.shortcuts.push(shortcut);
    }

    exportToJSON(){
        return this.manifest;
    }

    exportToFile(filename){

    }
}

module.exports = DWMG;