## 🚀 React Native Navigation: Stack + Bottom Tabs Example

This project demonstrates how to implement navigation in a **React Native app** using **React Navigation** with **Stack Navigator** and **Bottom Tabs Navigator**.

```markdown

## 📦 Libraries Used

- `@react-navigation/native`
- `@react-navigation/native-stack`
- `@react-navigation/bottom-tabs`
- `react-native-screens`
- `react-native-safe-area-context`
- `react-native-reanimated`
- `react-native-gesture-handler`
- `react-native-vector-icons`
- `react-native-svg`

```

## 📁 Project Structure

```markdown

/navigation
└── StackNavigator.js        # Stack Navigator (main)
└── BottomTabs.js         # Bottom Tab Navigator

/screens
└── HomeScreen.js           # Screen in Tab
└── ProfileScreen.js        # Screen in Tab
└── SettingsScreen.js        # Screen in Stack (outside Tab)

App.js                        # Entry Point

```

## 🛠️ Installation & Setup

### 1. Install React Navigation Core

```bash
npm install @react-navigation/native
````

### 2. Install Required Peer Dependencies

```bash
npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-svg react-native-vector-icons
```

> Add at the top of `index.js`:

```js
import 'react-native-gesture-handler';
```

### 3. Install Navigators

```bash
npm install @react-navigation/native-stack @react-navigation/bottom-tabs
```

---

## 🧭 Navigation Explained

### 🔹 Stack Navigator

* Mimics page navigation (push/pop).
* Used to navigate to screens like **Details**, **Login**, **Settings**, etc.

### 🔹 Bottom Tab Navigator

* Used for the main sections like **Home**, **Profile**, etc.
* Persistent tab bar at the bottom.

### 🔁 Combined Flow

* **Stack Navigator** wraps the **Tab Navigator**.
* This allows tabs to be persistent, while other screens (like Details) are stacked on top.

---

## 📱 Screens Overview

### 🏠 HomeScreen (`/Home`)

* Contains a button to navigate to **Home** screen.

### 👤 ProfileScreen (`/Profile`)

* Simple profile display.

### 📋 SettingsScreen

* Accessed via stack navigation from Home.

---

## 🔄 How Navigation Works

* The root navigator (`StackNavigator.js`) defines a `Stack.Navigator`.
* It includes:

  * A `Main` screen → which holds the `TabNavigator`.

### Example Navigation Call:

```js
navigation.navigate('Settings')
```

---

## 🧪 Usage

1. Clone this repo:

   ```bash
   git clone <repo-url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the app:

   ```bash
   npm run android   # for Android
   npm run ios       # for iOS (Mac only)
   ```

---

## 🖼️ Example UI Flow

```
App
 └── Stack.Navigator
      ├── TabNavigator (Home, Profile,Settings)
```

---

## ✨ Features

* Stack and Tab navigation working together.
* Clean modular folder structure.
* Tab icons using Ionicons.
* Fully working navigation transitions.

---

