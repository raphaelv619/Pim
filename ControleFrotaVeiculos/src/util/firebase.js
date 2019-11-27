import FCM, {FCMEvent} from 'react-native-fcm';

class Firebase {
    getToken() { // Promise
        return FCM.getFCMToken();
    }

    onTokenRefresh(hundler) { // Void
        FCM.on(FCMEvent.RefreshToken, hundler);
    }

    subscribe(topic) { // Void
        FCM.subscribeToTopic(topic);
    }

    unsubscribe(topic) { // Void
        FCM.unsubscribeFromTopic(topic);
    }

    onNotificationOpen(hundler) { // Void
        FCM.on(FCMEvent.Notification, hundler);
    }

    setBadgeNumber(num) { // Void
        FCM.setBadgeNumber(num);
    }

    getBadgeNumber() { // Promise
        FCM.getBadgeNumber();
    }

    requestPermissions() { // Promise
        return FCM.requestPermissions();
    }

    getInitialNotification() { // Promise
        return FCM.getInitialNotification();
    }

    presentLocalNotification(notification) { // Void
        return FCM.presentLocalNotification(notification);
    }

    scheduleLocalNotification(schedule) { // Void
        return FCM.scheduleLocalNotification(schedule);
    }

    getScheduledLocalNotifications() { // Promise
        return FCM.getScheduledLocalNotifications();
    }

    removeAllDeliveredNotifications() { // Void
        return FCM.removeAllDeliveredNotifications();
    }

    removeDeliveredNotification(id) { // Void
        return FCM.removeDeliveredNotification(id);
    }

    cancelAllLocalNotifications() { // Void
        return FCM.cancelAllLocalNotifications();
    }

    cancelLocalNotification(id) { // String
        return FCM.cancelLocalNotification(id);
    }

    send(id, data) { // String
        return FCM.send(id, data);
    }

    enableDirectChannel() { // Void
        return FCM.enableDirectChannel();
    }

    isDirectChannelEstablished() { // Promise
        return FCM.isDirectChannelEstablished();
    }

    getAPNSToken() { // Promise
        return FCM.getAPNSToken();
    }

    setNotificationCategories(categories) { // Void
        return FCM.setNotificationCategories(categories);
    }
}

var firebaseClass = new Firebase();
export default firebaseClass;
