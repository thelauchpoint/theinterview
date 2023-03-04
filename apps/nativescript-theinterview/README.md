# Theinterview

So you think you a ready to work on some nativescript code, lets see what you got!

## Number 1

- We are asking you to take an array of objects and display them in a NativeScript ListView, working on both iOS and Android.
- For further instructions: libs/xplat/nativescript/features/src/lib/my-feature/components/test-feature/test-feature.component.ts
- EST TIME TO COMPLETE: 15min

## Build and Run Mobile App

To build and run the nativescript app, you will need to follow the nativescript [environment setup](https://docs.nativescript.org/environment-setup.html)

- From root, run `nx run nativescript-theinterview:ios` for iOS simulator.
- From root, run `nx run nativescript-theinterview:android` for Android emulator.

If running into issues:
Start by running `ns doctor` from the this directory to see which pieces of your dev environment are missing to build for iOS or Android. If you run this command from root, you will be missing some packages that are only installed at the app level.
