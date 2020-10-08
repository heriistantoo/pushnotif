import PushNotification from 'react-native-push-notification';

const showNotification = (title, message) => {
    PushNotification.createChannel(
        {
            channelId: "channel-a", // (required)
            channelName: "My channel a", // (required)
            channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
            soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
            importance: 4, // (optional) default: 4. Int value of the Android notification importance
            vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
        },
        (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
    PushNotification.localNotification({
        channelId: "channel-a",
        title: title,
        message: message,
    });   
};

const handleScheduleNotification = (title, message) => {
    PushNotification.createChannel(
        {
            channelId: "channel-b", // (required)
            channelName: "My channel b", // (required)
            channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
            soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
            importance: 4, // (optional) default: 4. Int value of the Android notification importance
            vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
        },
        (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
    PushNotification.localNotificationSchedule({
        channelId: "channel-b",
        title: title,
        message: message,
        date: new Date(Date.now() + 3 * 1000),
    });
};

const handleCancel = () =>{
    PushNotification.cancelAllLocalNotifications();
};

export {showNotification, handleScheduleNotification, handleCancel};