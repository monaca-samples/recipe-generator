import React from 'react';
import { getDevice } from 'framework7/lite-bundle';
import {
  f7,
  f7ready,
  App,
  View,
  Popup,
  Page,
  Navbar,
  NavRight,
  Link,
  Block,
} from 'framework7-react';
import cordovaApp from '../js/cordova-app';

import routes from '../js/routes';

const MyApp = () => {
  const device = getDevice();
  // Framework7 Parameters
  const f7params = {
    name: 'My Recipe', // App name
    theme: 'auto', // Automatic theme detection


    id: 'io.framework7.myapp', // App bundle ID
    // App routes
    routes: routes,


    // Input settings
    input: {
      scrollIntoViewOnFocus: device.cordova && !device.electron,
      scrollIntoViewCentered: device.cordova && !device.electron,
    },
    // Cordova Statusbar settings
    statusbar: {
      iosOverlaysWebView: true,
      androidOverlaysWebView: false,
    },
  };
  f7ready(() => {
    // Init cordova APIs (see cordova-app.js)
    if (f7.device.cordova) {
      cordovaApp.init(f7);
    }

    // Call F7 APIs here
  });

  return (
    <App {...f7params} >
      {/* Your main view, should have "view-main" class */}
      <View main className="safe-areas" url="/" />

      {/* Popup */}
      <Popup id="my-popup">
        <View>
          <Page>
            <Navbar title="Popup">
              <NavRight>
                <Link popupClose>Close</Link>
              </NavRight>
            </Navbar>
            <Block>
              <p>Popup content goes here.</p>
            </Block>
          </Page>
        </View>
      </Popup>
    </App>
  )
}
export default MyApp;