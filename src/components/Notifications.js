import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearNotification } from '../actions/notificationActions';
import styles from '../styles/components/Notifications.module.css';

const Notifications = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notification);

  useEffect(() => {
    if (notification) {
      const timeoutId = setTimeout(() => {
        dispatch(clearNotification());
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [notification, dispatch]);

  if (!notification) {
    return null;
  }

  return (
    <div className={`${styles.notification} ${styles[notification.type]}`}>
      {notification.message}
    </div>
  );
};

export default Notifications;
