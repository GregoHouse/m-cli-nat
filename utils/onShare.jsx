import React from 'react';
import { Alert, Share } from 'react-native';


  const onShare = async () => {
    try {
      const result = await Share.share({
        url: 'https://www.airbnb.com.ar/'
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

export default onShare;