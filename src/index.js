const displayTypes = require('./displayTypes.js');

class DWMG {

    manifest = {
        icons: []
    };

    static displayTypes = displayTypes;

    constructor(options = {}){
        this.manifest.name = options.name;
        this.manifest.short_name = options.short_name;
        this.manifest.start_url = options.start_url;
        this.manifest.display = options.display;
        this.manifest.background_color = options.background_color;
        this.manifest.description = options.description;
    }

    addIcon(src, sizes, type){
        let icon = {
            src: src,
            sizes: sizes
        };
        if(type != null) icon.type = type;
        this.manifest.icons.push(icon)
    }

    exportToJSON(){
        return this.manifest;
    }

    exportToFile(filename){

    }
}

module.exports = DWMG;