// hooks/useAnalytics.ts
import { analytics } from '../config/firebaseConfig';
import { logEvent } from 'firebase/analytics';

export const useAnalytics = () => {
  const sendEvent = (eventName: string, params?: { [key: string]: any }) => {
    if (analytics) {
      logEvent(analytics, eventName, params);
    }
  };

  return { sendEvent };
};
