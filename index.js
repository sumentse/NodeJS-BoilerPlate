import 'babel-polyfill';
import dotenv from 'dotenv';
dotenv.config();
import puppeteer from 'puppeteer';
import fs from 'fs';
import _ from 'lodash';
import ProgressBar from 'progress';
import path from 'path';
import keywords from 'retext-keywords';
import {
    normalize,
    schema
} from 'normalizr';

//execute program
(async () => {
    
    try {

        const launchOptions = {
            // headless: false,
            slowMo: 250,
            defaultViewport: null,
            args: ['--disable-device-discovery-notifications'] //gets rid of the cloud print notification
        };

        let browser = await puppeteer.launch(launchOptions);
        let page = await browser.newPage();

        browser.on('disconnected', async () => {
            console.log('got disconnected');
            browser = await puppeteer.launch(launchOptions);
            page = await browser.newPage();
        });


    } catch (err) {
        console.log(err)
    }

})();
