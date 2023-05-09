export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';

export const showNotification = (message, notificationType) => ({
  type: SHOW_NOTIFICATION,
  payload: {
    message,
    notificationType,
  },
});

export const hideNotification = () => ({
  type: HIDE_NOTIFICATION,
});

export const clearNotification = hideNotification;