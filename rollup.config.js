import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import glob from 'glob';
import path from 'path';

export default {
    input: 'src/javascript/index.js',
    output: {
        file: 'build/lib/react-dxcomponents.umd.js',
        format: 'umd',
        name:'jahia.reactcomponents',
        sourcemap: true,
        globals: {
            "@jahia/apollo-dx": "jahia.apollodx",
            "lodash": "_",
            "material-ui/styles":"materialUiStyles"
        }
    },
    external:[
        "apollo-client",
        "apollo-link",
        "apollo-link-http",
        "apollo-link-context",
        "apollo-cache-inmemory",
        "apollo-utilities",
        "@jahia/apollo-dx",
        "graphql",
        "graphql-tag",
        "history",
        "i18next",
        "i18next-xhr-backend",
        "i18next-chained-backend",
        "jss",
        "jss-preset-default",
        "lodash",
        "material-ui",
        "material-ui/colors",
        "material-ui/styles",
        "material-ui/styles/colorManipulator",
        "material-ui-icons",
        "prop-types",
        "react",
        "react-apollo",
        "react-dom",
        "react-flexbox-grid",
        "react-i18next",
        "react-jss",
        "react-redux",
        "react-router",
        "react-router-dom",
        "redux",
        "redux-extend-reducer",
        "theming",
        "zen-observable"
    ],

    plugins: [
        resolve({
            extensions: [ '.js', '.jsx' ]
        }),
        json(),
        babel({
            exclude:'node_modules/**',
            presets: [ [ 'env', { modules: false } ], 'stage-3', 'react' ],
            plugins: [ 'external-helpers' ]
        })

    ]
};