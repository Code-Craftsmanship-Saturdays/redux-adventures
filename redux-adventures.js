#!/usr/bin/env node

const Workshopper = require('workshopper');
const {join}        = require('path');

const filePath = f => join(__dirname, f);

Workshopper({
    name      : 'redux-adventures',
    appDir    : __dirname,
    languages : ['en'],
    helpFile  : filePath('./i18n/help/{lang}.txt'),
    menu: {
        bg: 'blue',
        fg: 'white',
    }
});