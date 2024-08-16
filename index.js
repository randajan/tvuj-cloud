import sapp, { argv } from "@randajan/simple-app";
import ImportGlobPlugin from 'esbuild-plugin-import-glob';
import { sassPlugin } from 'esbuild-sass-plugin';
import jet from "@randajan/jet-core";

//those values are default values

sapp(argv.env === "prod", {
    be:{
        plugins:[
            ImportGlobPlugin.default()
        ]
    },
    fe:{
        loader:{
            ".js":"jsx",
            '.png': 'file',
            ".jpg": "file",
            ".gif": "file",
            ".eot": "file",
            ".woff": "file",
            ".ttf": "file",
            ".svg": "file"
        },
        //entries:["index.jsx", "tools.js"],
        plugins:[
            ImportGlobPlugin.default(),
            sassPlugin()
        ]
    }
})