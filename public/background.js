'use strict';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (!request.color) {
        sendResponse({msg: `You didn't set any color`})
    }

    sendResponse({msg: `You must really like the color ${request.color}`})
})

chrome.runtime.onInstalled.addListener(details => {
    chrome.runtime.setUninstallURL('https://daily-dev-tips.com');

    if (details.reason === 'install') {
        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'icons/icon-48.png',
            title: 'Hi there 👋',
            message: 'Welcome to the best extensions you ever installed',
            buttons: [
                {title: 'Thanks 😅️'}
            ],
            priority: 0
        });
    }

    if (details.reason === 'update') {
        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'icons/icon-48.png',
            title: 'Thank you',
            message: 'For updating this extensions',
            buttons: [
                {title: 'Cool'}
            ],
            priority: 0
        });
    }
})

chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'motivation_alarm') {
        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'icons/icon-48.png',
            title: 'Hi there 👋',
            message: 'Just a reminder that you rock!',
            buttons: [
                {title: 'I know ☺️'}
            ],
            priority: 0
        });
    }
});