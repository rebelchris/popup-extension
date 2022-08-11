'use strict';

chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'motivation_alarm') {
        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'icons/icon-48.png',
            title: 'Hi there 👋',
            message: 'Just a reminder that you rock!',
            buttons: [
                { title: 'I know ☺️'}
            ],
            priority: 0
        });
    }
});