# Run on phone
1. Android
  * enable usb debugging
  * Connect Phone:
    1. With cable
    2. Over wifi:
      * adb tcpip 5555
      * adb connect <device_ip>:5555
  * adb devices (check if device connected)
  * npx react-native run-android
2. IOS
  * npx pod-install ios => react-navigation requirement
  * List devices:
    1. xcrun instruments -s devices
  * npx react-native run-ios --device "<device_name>"


# List Icon
1. MaterialCommunityIcons: <https://cdn.materialdesignicons.com/4.0.96/>
