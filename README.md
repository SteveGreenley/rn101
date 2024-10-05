# RN101 - A React Native Tutorial

Steve Greenley - 2024

[LinkedIn: greenleysteve](https://www.linkedin.com/in/greenleysteve/)

This tutorial is a step-by-step guide to building a React Native app without using Expo. We will be using the React Native CLI to create a new project and build a simple app. We will also be using the React Navigation library to create a navigation stack for our app and add various features that are commonly found in mobile apps.

At the time of writing, the latest version of React Native is 0.75. This tutorial is based on that version. If you are using a different version, some of the steps may not work as expected.

## Prerequisites

Please make sure you have the following installed on your machine before you start:

- Node.js 18.18 or later
- Watchman
- JDK 17 or later - recommended OpenJDK 17 Azul Zulu
- Android Studio
  - Android SDK Platform 34
- Xcode
- CocoaPods

For more information on how to set up your development environment, please refer to the official React Native documentation: [Set up your environment](https://reactnative.dev/docs/environment-setup)

This tutorial uses a series of Git branches to show the progression of the app. You can clone the repository and checkout the branches to see the code at each step.

The branches are named as follows:

- `step-1` - Initial setup
  - Add [React Navigation](https://reactnavigation.org/docs/getting-started)
- `step-2` - Layouts with [Flexbox](https://reactnative.dev/docs/flexbox)
  - Refactoring layout components
- `step-3` - Simple state management with The useState hook
- `step-4` - More types of navigation - Tabs and Drawers vs Stacks
  - Some advice about modals
- `step-5` - Add state management with [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- `step-6` - Calling an API with [Axios](https://axios-http.com/docs/intro)
- `step 7` - Calling an API with [RTK Query](https://redux-toolkit.js.org/tutorials/rtk-query)
- `step-8` - Add a form with [Formik](https://formik.org/docs/overview)
