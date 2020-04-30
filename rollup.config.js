import babel from "rollup-plugin-babel";
import { watch } from "rollup";
import path from "path";
import sass from "rollup-plugin-sass";
import { uglify } from "rollup-plugin-uglify";
import { unlinkSync } from "fs";

const SCSS_CACHED_BUNDLE_PATH = "dist/bundle.min.css";

const plugins = [
    babel({
        exclude: "node_modules/**",
        presets: [
            ["@babel/env", { modules: false }]
        ]
    }),
    uglify()
];

const sassConfig = {
    input: "./scss/modal.scss",
    output: { file: SCSS_CACHED_BUNDLE_PATH },
    plugins: [sass({ output: "dist/modal.min.css" })],
};

const watcher = watch(sassConfig);

watcher.on("event", ({ code }) => {
    if (code === "END") {
        unlinkSync(path.resolve(__dirname, SCSS_CACHED_BUNDLE_PATH));
        watcher.close();
    }
});

export default [sassConfig, {
    input: "./index.js",
    output: {
        name: "modal",
        file: "dist/modal.min.js",
        format: "iife",
    },
    plugins,
}];