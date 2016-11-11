"use strict";

const semver = require('semver');
const {
    node
} = require('./package.json').engines;

module.exports = function () {
    const isOkNodeVersion = semver.satisfies(process.versions.node, node);
    if (!isOkNodeVersion) {
        console.error(
            `redux adventures needs Node.js version ${requiredNodeVersion}, but found to be running Node.js ${process.version}`
        );
        process.exit(1);
    }
};