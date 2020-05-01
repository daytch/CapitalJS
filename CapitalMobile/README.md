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
  * ????
  * npx react-native run-ios