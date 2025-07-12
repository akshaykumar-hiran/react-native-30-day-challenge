# React Native Getting Started Guide

This guide provides a comprehensive overview of React Native, its architecture, key differences from ReactJS, and step-by-step instructions to set up your environment and create your first app using **Expo CLI** and **React Native CLI**.

---

## 📌 What is React Native?

**React Native** is an open-source framework developed by Meta (Facebook) that allows you to build **mobile applications** for **iOS** and **Android** using **JavaScript** and **React**.

Instead of using HTML and CSS, React Native uses **native components** (e.g., `<View>`, `<Text>`) and renders them using native platform APIs, not a webview.

### ✅ Features
- Cross-platform development
- Uses JavaScript & React syntax
- Fast Refresh and Hot Reloading
- Strong community and large ecosystem

---

## ⚔️ React Native vs ReactJS

| Feature              | React Native                                 | ReactJS                                      |
|---------------------|----------------------------------------------|----------------------------------------------|
| Platform             | Mobile (Android, iOS)                        | Web                                           |
| UI Components        | Native Components (View, Text)               | HTML Elements (div, span)                    |
| Rendering            | Native (via Bridge/Fabric)                   | DOM                                           |
| Styling              | StyleSheet (CSS-like in JS)                  | CSS, SCSS, Styled-components, etc.           |
| Navigation           | `react-navigation`, native navigators        | React Router                                 |
| Platform APIs        | Access to device APIs (camera, GPS, etc.)    | Limited to web APIs                          |

---

## 🏗️ React Native Architecture

### 1. **Bridge (Traditional Architecture)**

The Bridge is a key part of React Native's original architecture. It allows communication between:

- **JavaScript thread** (UI logic)
- **Native thread** (Android/iOS components)

🧠 Communication is asynchronous via a "Bridge" which can sometimes cause performance bottlenecks.

---

### 2. **Fabric (New Architecture)**

Fabric is the **new React Native architecture** aiming to improve performance and reduce the communication overhead of the Bridge.

- Introduces **JSI (JavaScript Interface)** to enable direct access to native modules
- Enables synchronous calls
- Improves performance and responsiveness

---

## ✅ Prerequisites & Installation

### 1. Install Node.js

```bash
https://nodejs.org/ (LTS version recommended)

```

Verify installation:

```bash
node -v
npm -v

```

### 2. Install Expo CLI
```bash
npm install -g expo-cli
```

Verify installation:

```bash
expo --version
```

### 3. Install React Native CLI
```bash
npm install -g react-native-cli
```

### 4. Install Android Studio or Xcode

Android Studio (Windows/Linux/Mac): Required for Android emulator

Xcode (Mac only): Required for iOS simulator

🚀 Create Your First Project
✅ 1. Using Expo CLI
```bash
npx create-expo-app MyFirstExpoApp
cd MyFirstExpoApp
npm start
```

This will launch the Metro bundler. You can scan the QR code using the Expo Go app.

📂 Project Structure (Expo)

```go

MyFirstExpoApp/
├── App.js
├── package.json
├── node_modules/
📄 App.js

```

```js

import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, Expo World! 🚀</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

```

### ✅ 2. Using React Native CLI

```bash

npx react-native init MyFirstRNApp
cd MyFirstRNApp
npx react-native run-android # for Android
npx react-native run-ios     # for iOS (macOS only)

```
📂 Project Structure (React Native CLI)
```go
MyFirstRNApp/
├── android/
├── ios/
├── App.js
├── package.json
├── node_modules/
📄 App.js

```
```js

import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello, React Native CLI! 🎉</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

```
🛠️ Development Tools
-> VS Code for coding
-> Android Emulator / iOS Simulator for previewing
-> React Native Debugger, Flipper for debugging
