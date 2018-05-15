# zenDriveTest
A cordova app for testing the zen drive library

## Installation

1. Install cocoapods
```
sudo gem install cocoapods
```
2. Install pods and build
Because of a bug in cordova-ios ([CB-12582](https://issues.apache.org/jira/browse/CB-12582)) the cocoa pods libary is not linked properly which is why we manually have to install the pods. cordova-ios@4.5.5 should contain a fix for this.

```
cd platform/ios
pod install
cd ../..
cordova build // This will fail, however it is still necessary.
```

3. Open platform/ios/ZendriveTest.xcworkspace
