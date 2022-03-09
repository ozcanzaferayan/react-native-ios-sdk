import React, {Component} from 'react';
import {View} from 'react-native';
import {NativeAdsManager} from 'react-native-fbads';

import NativeAdView from './NativeAdView';

export default class NativeAd extends Component {
  adsManager = new NativeAdsManager('2122084034714087_2122088321380325');

  render() {
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          justifyContent: 'center',
          backgroundColor: '#fff',
          padding: 20,
        }}>
        {/* @ts-ignore */}
        <NativeAdView adsManager={this.adsManager} />
      </View>
    );
  }
}
