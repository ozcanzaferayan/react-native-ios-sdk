import React, {useEffect, useState} from 'react';
import {AdSettings} from 'react-native-fbads';

import NativeAd from './NativeAd';

const NativeAdContainer = () => {
  const [isRequested, setIsRequested] = useState(false);
  useEffect(() => {
    AdSettings.setLogLevel('debug');
    AdSettings.addTestDevice(AdSettings.currentDeviceHash);
    if (isRequested) return;
    requestTrackingPermission();
    async function requestTrackingPermission() {
      const requestedStatus = await AdSettings.requestTrackingPermission();

      if (
        requestedStatus === 'authorized' ||
        requestedStatus === 'unavailable'
      ) {
        AdSettings.setAdvertiserIDCollectionEnabled(true);
        // Both calls are not related to each other
        // FB won't deliver any ads if this is set to false or not called at all.
        AdSettings.setAdvertiserTrackingEnabled(true);
      }
    }
    return () => {
      AdSettings.clearTestDevices();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <NativeAd />;
};

export default NativeAdContainer;
